import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/services',
  '/services/ai-infrastructure-consulting',
  '/services/mlops-consulting',
  '/services/data-infrastructure-consulting',
  '/approach',
  '/about',
  '/contact',
];

async function prerender() {
  console.log('Starting pre-rendering...');

  // Start a preview server
  const server = await preview({
    preview: { port: 3000, open: false },
  });

  console.log('Preview server started on port 3000');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of routes) {
      console.log(`Pre-rendering: ${route}`);

      const page = await browser.newPage();
      await page.goto(`http://localhost:3000${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Wait for React to hydrate
      await page.waitForSelector('#root > *', { timeout: 10000 });

      // Wait for react-helmet-async to update meta tags
      await page.waitForFunction(
        () => {
          const desc = document.querySelector('meta[name="description"]');
          const title = document.querySelector('title');
          // Check if meta tags have been updated from the default
          return desc && title && !title.textContent.startsWith('Baselyne Systems |');
        },
        { timeout: 5000 }
      ).catch(() => {
        // Homepage uses default title, so this is expected to timeout
        console.log(`  (Using default meta for ${route})`);
      });

      // Small delay to ensure all helmet updates are applied
      await new Promise(resolve => setTimeout(resolve, 500));

      // Get the rendered HTML
      const html = await page.content();

      // Determine output path
      const outputPath = route === '/'
        ? path.join(distPath, 'index.html')
        : path.join(distPath, route, 'index.html');

      // Create directory if needed
      const outputDir = path.dirname(outputPath);
      await fs.mkdir(outputDir, { recursive: true });

      // Write the pre-rendered HTML
      await fs.writeFile(outputPath, html);
      console.log(`  Written: ${outputPath}`);

      await page.close();
    }

    console.log('Pre-rendering complete!');
  } finally {
    await browser.close();
    server.httpServer.close();
  }
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});

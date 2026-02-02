import { Link } from "react-router-dom";
import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/baselyne-logo.jpg";

const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Approach", href: "/approach" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Data Infrastructure", href: "/services/data-infrastructure-consulting" },
    { name: "MLOps", href: "/services/mlops-consulting" },
    { name: "AI Infrastructure", href: "/services/ai-infrastructure-consulting" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-layer-2">
      {/* CTA Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Ready to move AI into production?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Schedule a 30-minute call to discuss your infrastructure challenges and how we can help.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/achyuth-1995/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Book an Intro Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Baselyne Systems" className="h-10 w-10 rounded-lg" />
              <span className="text-lg font-semibold text-foreground">Baselyne Systems</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              AI infrastructure, data engineering, and MLOps consulting. We design, build, and operate production-grade data platforms and AI systems.
            </p>
            <a
              href="https://www.linkedin.com/in/achyuthsamudrala/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Baselyne Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


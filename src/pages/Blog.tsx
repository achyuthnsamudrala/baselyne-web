import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const posts = [
  {
    title: "Retrieval OS: A Production-Grade Retrieval Runtime",
    subtitle: "How we built a serving layer that makes RAG systems deployable, measurable, and safe to operate",
    date: "February 2026",
    tags: ["Case Study", "Open Source"],
    excerpt:
      "Config versioning, staged rollouts, automatic quality guard-rails, and 2.8 ms rollback propagation — 10,785 QPS on a single node with an 81.4% natural cache hit rate.",
    href: "/blog/retrieval-os",
    github: "https://github.com/Baselyne-Systems/retrieval-os",
  },
  {
    title: "Building a High-Throughput CDC Platform",
    subtitle: "From database change to lakehouse in milliseconds",
    date: "February 2026",
    tags: ["Case Study", "Open Source"],
    excerpt:
      "How we built a modular Python CDC platform achieving 38,647 msg/s with config-driven tuning — exactly-once delivery, multi-source support, and Iceberg lakehouse with time travel.",
    href: "/blog/cdc-platform",
    github: "https://github.com/Baselyne-Systems/cdc-platform",
  },
];

export default function Blog() {
  return (
    <Layout>
      <SEO
        title="Blog | Baselyne Systems"
        description="Technical writing from Baselyne — case studies, architecture deep-dives, and open-source engineering."
        keywords="CDC platform, change data capture, data engineering blog, open source data infrastructure"
        canonical="https://baselynesystems.com/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Technical writing from Baselyne — case studies, architecture deep-dives, and open-source engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl grid gap-8">
            {posts.map((post) => (
              <Card key={post.href} className="border-border/50 bg-card transition-shadow hover:shadow-md">
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-muted-foreground">{post.subtitle}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{post.excerpt}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <span className="text-xs text-muted-foreground/70">{post.date}</span>
                    <div className="flex items-center gap-3 ml-auto">
                      <a
                        href={post.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                      <Button asChild size="sm">
                        <Link to={post.href} className="inline-flex items-center gap-1.5">
                          Read Post
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { ArrowRight, Database, Workflow, Shield, Layers, CheckCircle2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, dataInfraServiceSchema } from "@/components/SEO";

const capabilities = [
  {
    icon: Database,
    title: "Lakehouse Architecture",
    description:
      "Modern data platforms on Delta Lake, Iceberg, or Hudi. Designed for analytics, ML training, and AI workloads with governance from day one.",
  },
  {
    icon: Workflow,
    title: "Real-time & Batch Pipelines",
    description:
      "Streaming pipelines for real-time AI access alongside batch processing. Sub-second freshness where needed, cost-efficient batch where not.",
  },
  {
    icon: Shield,
    title: "AI-ready Governance",
    description:
      "Lineage tracking, access controls, and quality metrics that extend to AI systems. Meet GDPR, SOC2, and HIPAA without slowing down your team.",
  },
  {
    icon: Layers,
    title: "Semantic Data Layer",
    description:
      "Metadata, descriptions, and relationships that make data discoverable and usable—by both humans and AI systems.",
  },
  {
    icon: Search,
    title: "Vector & Hybrid Search",
    description:
      "Vector stores, embedding pipelines, and hybrid search for RAG and semantic search. Infrastructure that makes retrieval actually work.",
  },
];

const outcomes = [
  "Data freshness reduced from hours to minutes or seconds",
  "RAG retrieval accuracy improved through better data modeling",
  "End-to-end lineage from source data through AI outputs",
  "Query performance improved 10-100x through optimization",
  "GDPR/SOC2 compliance with AI-aware controls",
  "Storage costs reduced 40-60% through intelligent tiering",
];

export default function DataInfrastructureConsulting() {
  return (
    <Layout>
      <SEO
        title="Data Infrastructure Consulting | Baselyne Systems"
        description="Data infrastructure consulting for lakehouse architecture, pipelines, and governance. Reliable, scalable data platforms."
        keywords="data infrastructure consulting, data platform consulting, lakehouse consulting, data engineering consulting, data pipeline consulting, data governance consulting"
        canonical="https://baselynesystems.com/services/data-infrastructure-consulting"
        structuredData={dataInfraServiceSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Data Infrastructure Consulting
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Data infrastructure that powers AI
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Modern AI needs more than batch pipelines. We build data platforms
              that power analytics, ML training, RAG systems, and the next
              generation of AI applications.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a
                  href="https://calendly.com/baselyne-systems/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Discuss Your Data Platform
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              The Challenge
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Data infrastructure built for dashboards, not AI
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Most data platforms were designed for batch analytics and
                dashboards. Now you need them to power ML models, RAG systems,
                real-time applications, and AI agents. The architecture that
                worked for BI often breaks under these new demands.
              </p>
              <p>
                AI workloads need fresh data, not overnight ETL. They need
                vector search and embeddings, not just SQL. They need semantic
                understanding of your data, not just table schemas. And they
                need governance that extends to AI systems.
              </p>
              <p>
                We've built and operated petabyte-scale data platforms at Meta
                and other large-scale environments. We bring that experience to
                help you build infrastructure that's ready for modern AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              What We Deliver
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Modern data infrastructure that scales
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <Card
                key={capability.title}
                className="border-border/50 bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <capability.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Results
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                Outcomes from our data infrastructure engagements
              </h2>
              <p className="mt-4 text-muted-foreground">
                We focus on reliability, performance, and cost efficiency.
                Infrastructure that lets your data team focus on analysis, not
                firefighting.
              </p>
            </div>
            <div className="space-y-4">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Ready to modernize your data platform?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Schedule a call to discuss your data infrastructure challenges
              and goals.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/baselyne-systems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Schedule a Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

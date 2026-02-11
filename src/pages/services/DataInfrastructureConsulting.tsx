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
      "We default to Apache Iceberg—it's catalog-agnostic, handles schema evolution without rewriting data, and the ecosystem is converging around it. Both analytical queries and ML training reads work against the same tables, with time-travel for reproducible feature extraction.",
  },
  {
    icon: Workflow,
    title: "Real-time & Batch Pipelines",
    description:
      "CDC pipelines from your operational databases via Debezium, feeding a streaming layer on Kafka or Flink for sub-minute freshness. Batch processing coexists on the same storage layer—the lakehouse format handles both access patterns without separate systems.",
  },
  {
    icon: Shield,
    title: "AI-ready Governance",
    description:
      "Column-level access controls and data quality contracts enforced at pipeline write time—not checked after the fact. Lineage that tracks data from source databases through transformations, embeddings, and model training, so you can answer 'what data went into this model' on demand.",
  },
  {
    icon: Layers,
    title: "Semantic Data Layer",
    description:
      "A metadata layer that makes your data discoverable by both analysts writing SQL and AI systems generating embeddings. Descriptions, relationships, and quality metrics attached to datasets—so your RAG pipeline knows what to trust and what to exclude.",
  },
  {
    icon: Search,
    title: "Vector & Hybrid Search",
    description:
      "pgvector for teams that already have Postgres and don't need billion-scale similarity search. Dedicated vector databases like Qdrant when you do. Embedding pipelines triggered by CDC events so your vector store reflects current data, not last week's snapshot.",
  },
];

const outcomes = [
  "CDC pipelines delivering sub-minute data freshness to ML systems",
  "RAG retrieval precision improved through proper chunking and embedding freshness",
  "End-to-end lineage from source databases through embeddings and model training",
  "Query performance improved 10-100x through partition pruning and proper table formats",
  "Compliance requirements met with column-level access controls and audit trails",
  "Storage costs reduced 40-60% through Iceberg's compaction and intelligent tiering",
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
                Most data platforms were designed around a nightly ETL that
                lands Parquet files for Redshift or BigQuery. That works for
                dashboards. It doesn't work when your ML team needs features
                computed on data that's less than 10 minutes old, or when your
                RAG pipeline needs to re-embed documents as they're updated.
              </p>
              <p>
                The fix isn't bolting a streaming layer onto the side of your
                batch pipeline. It's rethinking the storage layer—moving to a
                lakehouse format that supports both batch and incremental reads,
                adding CDC from your operational databases, and building a
                semantic layer that makes data discoverable to both analysts and
                AI systems.
              </p>
              <p>
                We've built platforms at this inflection point at Meta—where the
                same data had to serve dashboards, ML training, and real-time
                serving with different freshness and access patterns. We know
                where the abstractions should sit.
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

      {/* How We Engage */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              How We Engage
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              What working with us looks like
            </h2>
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Architecture review</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We map your current data flows, identify bottlenecks, and
                    assess readiness for the workloads you're planning. Typically
                    2–3 weeks, delivered as a prioritized roadmap.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Build & migrate</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We implement the highest-priority changes—lakehouse migration,
                    CDC setup, governance layer—in focused sprints. Most data
                    infrastructure projects run 8–12 weeks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Handoff & advise</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We hand off with full documentation and runbooks so your team
                    operates independently. Optional advisory retainer for
                    architecture guidance as your data needs grow.
                  </p>
                </div>
              </div>
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
              Most engagements start with a 30-minute call to understand your
              current stack and where the bottlenecks are. No pitch
              deck—just a technical conversation.
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

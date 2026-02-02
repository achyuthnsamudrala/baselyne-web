import { ArrowRight, AlertTriangle, CheckCircle2, Database, Layers, Shield, Cpu, TrendingDown, Clock, Search, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { SEO, organizationSchema, professionalServiceSchema } from "@/components/SEO";
import { TypewriterText } from "@/components/TypewriterText";

const heroTaglines = [
  "AI and data systems that actually run in production.",
  "Data infrastructure that scales with your ambitions.",
  "MLOps that gets models out of notebooks.",
  "AI infrastructure without the runaway costs.",
];

const failurePoints = [
  {
    icon: Database,
    title: "Data platforms not AI-ready",
    description: "Batch pipelines built for dashboards. No real-time access for models, vector support for RAG, or semantic layers for agents.",
  },
  {
    icon: Layers,
    title: "RAG retrieval doesn't work",
    description: "Embeddings are stale, chunking is wrong, retrieval returns irrelevant results. No way to debug why AI outputs are poor.",
  },
  {
    icon: Clock,
    title: "AI stuck in prototypes",
    description: "Months of iteration that never reach production. No clear path from notebook or demo to deployed system.",
  },
  {
    icon: TrendingDown,
    title: "Runaway AI costs",
    description: "LLM and GPU spend scales faster than value. No visibility into cost per model, pipeline, or use case.",
  },
  {
    icon: AlertTriangle,
    title: "Silent failures",
    description: "No monitoring for drift, latency spikes, or quality degradation. Problems surface as customer complaints.",
  },
  {
    icon: Shield,
    title: "Governance gaps",
    description: "No audit trail for AI decisions. Data lineage unclear. Access controls don't extend to AI systems.",
  },
  {
    icon: Search,
    title: "RAG pipeline complexity",
    description: "Vector stores, embedding pipelines, and retrieval quality are hard to get right and harder to debug at scale.",
  },
  {
    icon: Zap,
    title: "LLM infrastructure at scale",
    description: "GPU provisioning, model serving, and latency optimization require deep infrastructure expertise most teams lack.",
  },
];

const outcomes = [
  {
    icon: Layers,
    title: "AI-ready data",
    description: "Real-time pipelines, vector infrastructure, and semantic layers that power both analytics and AI.",
  },
  {
    icon: Cpu,
    title: "Reliable AI deployment",
    description: "Models and AI systems in production with monitoring, rollback capabilities, and defined SLOs.",
  },
  {
    icon: Database,
    title: "Cost-controlled infrastructure",
    description: "Right-sized compute with clear cost attribution per team, model, and use case.",
  },
  {
    icon: CheckCircle2,
    title: "Operational maturity",
    description: "Observability, incident response, and the audit trails you need for compliance.",
  },
];

export default function Home() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, professionalServiceSchema],
  };

  return (
    <Layout>
      <SEO
        title="AI Infrastructure & MLOps Consulting | Baselyne Systems"
        description="Expert AI infrastructure, MLOps, and data infrastructure consulting. We help data and ML teams move AI from experimentation into production with reliable, secure, and cost-controlled infrastructure."
        keywords="AI infrastructure consulting, MLOps consulting, data infrastructure consulting, ML platform, machine learning infrastructure, AI consulting firm, data engineering consulting"
        canonical="https://baselynesystems.com"
        structuredData={combinedSchema}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-layer-1 to-layer-2">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="container relative mx-auto px-4 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl min-h-[2.4em] sm:min-h-[2.4em] lg:min-h-[1.2em]">
              <TypewriterText
                texts={heroTaglines}
                typingSpeed={70}
                deletingSpeed={40}
                pauseDuration={4000}
              />
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              We help data and ML teams move AI from experimentation into production by building reliable, secure, and cost-controlled infrastructure at scale.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a
                  href="https://calendly.com/achyuth-1995/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Schedule a Conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Common Failure Points</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Where AI infrastructure breaks down
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most teams don't lack ML talent. They lack the infrastructure to make that talent effective at scale.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {failurePoints.map((item) => (
              <Card key={item.title} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                    <item.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">What We Deliver</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Infrastructure that enables your team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Systems designed for the operational reality of running ML at scale, not just the happy path.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <Card key={item.title} className="border-primary/10 bg-gradient-to-b from-card to-accent/20">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Our Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                End-to-end data and ML infrastructure
              </h2>
              <p className="mt-4 text-muted-foreground">
                From data pipelines to model deployment, we handle the infrastructure so your team can focus on the science.
              </p>
              <Button asChild className="mt-8">
                <Link to="/services" className="inline-flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Data Infrastructure</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Large-scale pipelines, lakehouse platforms, and data governance that scales.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">MLOps & Model Platforms</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Model deployment, monitoring, and lifecycle management for production workloads.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">AI Infrastructure</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Scalable compute, cost control, and security for GPU-intensive workloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Preview */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">How We Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Engineering-led, not sales-led
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement starts with understanding your system. We assess your current state, identify the critical path, and focus on what matters for production readiness.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/approach" className="inline-flex items-center gap-2">
                Learn About Our Approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}


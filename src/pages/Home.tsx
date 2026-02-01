import { ArrowRight, AlertTriangle, CheckCircle2, Database, Layers, Shield, Cpu, TrendingDown, Clock, Search, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";

const failurePoints = [
  {
    icon: Database,
    title: "Data platforms not AI-ready",
    description: "Legacy warehouses built for BI, not ML. No feature stores, vector support, or real-time capabilities.",
  },
  {
    icon: Layers,
    title: "Fragmented data pipelines",
    description: "Dozens of ETL jobs with no ownership. Data quality issues propagate silently to downstream models.",
  },
  {
    icon: Clock,
    title: "Models stuck in notebooks",
    description: "Months of iteration that never reach production. No clear path from experiment to deployment.",
  },
  {
    icon: TrendingDown,
    title: "Runaway cloud costs",
    description: "GPU and storage spend scales faster than value. No visibility into cost per pipeline or inference.",
  },
  {
    icon: AlertTriangle,
    title: "Silent degradation",
    description: "No monitoring for data drift, schema changes, or latency spikes. Problems surface as customer complaints.",
  },
  {
    icon: Shield,
    title: "Compliance gaps",
    description: "Data lineage unclear. Access controls inconsistent. GDPR or SOC2 requests become fire drills.",
  },
  {
    icon: Search,
    title: "RAG pipeline complexity",
    description: "Vector stores, embedding pipelines, and retrieval quality are hard to get right and harder to debug at scale.",
  },
  {
    icon: Zap,
    title: "LLM inference at scale",
    description: "GPU provisioning, model serving, and latency optimization require deep infrastructure expertise most teams lack.",
  },
];

const outcomes = [
  {
    icon: Layers,
    title: "Production-grade pipelines",
    description: "Data infrastructure that handles petabyte-scale workloads with proper observability and governance.",
  },
  {
    icon: Cpu,
    title: "Reliable model deployment",
    description: "Models in production with monitoring, rollback capabilities, and defined SLOs.",
  },
  {
    icon: Database,
    title: "Cost-controlled compute",
    description: "Right-sized infrastructure with clear cost attribution and automated scaling policies.",
  },
  {
    icon: CheckCircle2,
    title: "Operational maturity",
    description: "On-call runbooks, incident response, and the documentation you need for audits.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-layer-1 to-layer-2">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="container relative mx-auto px-4 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI infrastructure that actually runs in production
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
                <h3 className="font-semibold text-foreground">AI Platform Engineering</h3>
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


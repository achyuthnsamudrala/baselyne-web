import { ArrowRight, Cpu, Gauge, Lock, Server, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, aiInfraServiceSchema } from "@/components/SEO";

const capabilities = [
  {
    icon: Cpu,
    title: "GPU Orchestration",
    description:
      "Kubernetes-based platforms for training and inference. Right-sized clusters with autoscaling that responds to actual demand.",
  },
  {
    icon: Gauge,
    title: "Cost Attribution & Control",
    description:
      "Clear visibility into cost per team, project, and model. Budgets, alerts, and optimization recommendations before costs spiral.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description:
      "Network isolation, secrets management, and audit logging. Infrastructure that passes security reviews the first time.",
  },
  {
    icon: Server,
    title: "LLM Serving Infrastructure",
    description:
      "Production-grade infrastructure for serving LLMs. vLLM, TensorRT-LLM, or managed endpoints—optimized for your latency and cost requirements.",
  },
  {
    icon: Zap,
    title: "AI Observability",
    description:
      "Tracing, logging, and monitoring for AI systems. Debug failures, track behavior, and understand why models perform the way they do.",
  },
];

const outcomes = [
  "GPU utilization increased from 30% to 80%+",
  "LLM costs reduced 50-80% through optimization",
  "Inference latency optimized for production SLAs",
  "Clear cost attribution per team, project, and model",
  "Security and compliance requirements met on first audit",
  "Team self-service for AI resources without bottlenecks",
];

export default function AIInfrastructureConsulting() {
  return (
    <Layout>
      <SEO
        title="AI Infrastructure Consulting | GPU, LLM & ML Platform Experts"
        description="Expert AI infrastructure consulting for GPU orchestration, LLM serving, and ML platform engineering. We help teams build scalable, cost-controlled AI compute infrastructure."
        keywords="AI infrastructure consulting, GPU orchestration consulting, LLM infrastructure, ML platform consulting, AI compute optimization, machine learning infrastructure"
        canonical="https://baselynesystems.com/services/ai-infrastructure-consulting"
        structuredData={aiInfraServiceSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              AI Infrastructure Consulting
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Scalable AI compute with cost control
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              GPU and LLM costs can spiral without proper controls. We build AI
              infrastructure that gives teams the compute they need while
              maintaining visibility and control over spend.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a
                  href="https://calendly.com/achyuth-1995/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Discuss Your AI Infrastructure
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
              AI infrastructure is expensive and complex
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Most teams start AI projects with managed APIs or a few GPUs.
                As usage grows, so do problems: costs spike unpredictably,
                GPU utilization hovers at 30%, and there's no visibility into
                what's driving spend or why systems fail.
              </p>
              <p>
                The transition from prototypes to production AI requires
                infrastructure expertise that most teams lack. Self-hosted
                models, GPU orchestration, LLM serving, cost attribution—each
                domain has its own complexity.
              </p>
              <p>
                We've built and operated AI infrastructure at Meta and other
                large-scale environments. We bring that experience to help you
                build systems that are production-ready from day one.
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
              Production-grade AI infrastructure
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
                Outcomes from our AI infrastructure engagements
              </h2>
              <p className="mt-4 text-muted-foreground">
                We focus on measurable improvements: lower costs, higher
                utilization, faster iteration, and infrastructure that scales
                with your AI ambitions.
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
              Ready to optimize your AI infrastructure?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Schedule a call to discuss your GPU workloads, cost challenges,
              and infrastructure goals.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/achyuth-1995/30min"
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

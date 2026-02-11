import { ArrowRight, Cpu, Gauge, Lock, Zap, CheckCircle2 } from "lucide-react";
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
      "Kubernetes with the NVIDIA GPU Operator and time-sliced MIG for fractional GPU allocation. Cluster autoscaler configured for GPU-aware scaling with appropriate spin-up tolerances—not the defaults, which are calibrated for CPU workloads and too slow for bursty inference.",
  },
  {
    icon: Gauge,
    title: "Cost Visibility & Control",
    description:
      "OpenCost or Kubecost for per-namespace cost attribution, broken down to the model and use case level. Spot instances with training checkpointing for 60-70% savings. Reserved capacity for serving, with automated right-sizing based on actual GPU utilization percentiles.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description:
      "Kubernetes NetworkPolicies isolating GPU workloads by team. Secrets injected at runtime via external-secrets-operator, not baked into container images. Audit logging that captures who deployed what model, trained on what data, to satisfy security reviews and compliance audits.",
  },
  {
    icon: Zap,
    title: "AI Observability",
    description:
      "NVIDIA DCGM metrics for GPU health and utilization. Application-level tracing for inference requests through the full serving stack. Token-level cost tracking for LLM workloads so you can attribute spend to specific features and customers, not just 'the AI line item.'",
  },
];

const outcomes = [
  "GPU utilization increased from 30% to 80%+ through fractional allocation and autoscaling",
  "LLM inference costs reduced 50-80% through quantization and batching optimization",
  "Inference latency SLAs met with properly tuned serving infrastructure",
  "Per-model, per-team cost attribution replacing opaque GPU line items",
  "Security audit passed on first attempt with proper isolation and audit logging",
  "ML teams self-serving GPU resources without infrastructure team as bottleneck",
];

export default function AIInfrastructureConsulting() {
  return (
    <Layout>
      <SEO
        title="AI Infrastructure Consulting | Baselyne Systems"
        description="AI infrastructure consulting for GPU orchestration, LLM serving, and ML platforms. Scalable, cost-controlled compute."
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
                  href="https://calendly.com/baselyne-systems/30min"
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
                Most teams start with a few on-demand GPU instances or managed
                API calls. When usage grows, the problems compound: GPU
                utilization sits around 30% because workloads are bursty but
                instances run 24/7. There's no cost attribution, so one team's
                expensive training run is indistinguishable from another's
                lightweight inference. OOM errors crash jobs silently.
              </p>
              <p>
                The fix isn't just provisioning more GPUs. It's cluster
                autoscaling tuned for GPU spin-up latency, fractional GPU
                allocation so inference workloads don't waste a full A100, spot
                instance strategies that save 60-70% on training without losing
                work, and monitoring that distinguishes between GPU memory
                pressure and actual compute saturation.
              </p>
              <p>
                We've operated GPU infrastructure at scale where utilization
                and cost control weren't optional—they were the difference
                between a viable product and an unsustainable cost center.
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
                  <h3 className="font-semibold text-foreground">Infrastructure audit</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We profile your GPU utilization, cost breakdown, and serving
                    performance. You get a clear picture of what's wasted, what's
                    at risk, and what to prioritize. Typically 1–2 weeks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Optimize & build</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We implement the highest-impact changes—autoscaling tuning,
                    fractional GPU allocation, cost attribution, security
                    hardening. Most AI infrastructure projects run 4–8 weeks.
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
                    Your platform team gets full ownership with runbooks and
                    dashboards. Optional advisory retainer for architecture
                    guidance and optimization reviews as your workload mix
                    changes.
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
              Ready to optimize your AI infrastructure?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most engagements start with a 30-minute call to understand your
              GPU workloads and cost profile. No pitch deck—just a technical
              conversation.
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

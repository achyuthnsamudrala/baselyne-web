import { ArrowRight, GitBranch, Server, BarChart3, Workflow, RefreshCw, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, mlopsServiceSchema } from "@/components/SEO";

const capabilities = [
  {
    icon: GitBranch,
    title: "Model & Prompt Versioning",
    description:
      "MLflow for model registry and experiment tracking—it's the closest thing to a standard. Git for prompt templates and configuration. The real value is the evaluation pipeline wired into CI: every model and prompt change runs against a held-out set before it can be promoted.",
  },
  {
    icon: Server,
    title: "Deployment Infrastructure",
    description:
      "vLLM for LLM serving—continuous batching, KV-cache management, and quantized inference out of the box. For traditional ML, a straightforward FastAPI or Triton service behind a Kubernetes autoscaler. We avoid heavy frameworks like KServe or Seldon unless you need multi-model routing.",
  },
  {
    icon: BarChart3,
    title: "Evaluation & Monitoring",
    description:
      "Automated evaluation runs on every model change: accuracy on held-out data, latency benchmarks, cost estimates. In production, prediction distribution monitoring catches drift before ground truth labels exist. We alert on distribution shifts, not just endpoint health.",
  },
  {
    icon: Workflow,
    title: "ML Pipeline Orchestration",
    description:
      "Dagster or Airflow for training pipelines with data validation checks at ingestion, feature computation with point-in-time correctness, and evaluation gates before promotion. Retraining triggered by data freshness or drift signals, not arbitrary cron schedules.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "Structured feedback collection from production—failed predictions, user corrections, low-confidence outputs—routed back into evaluation datasets. A/B testing infrastructure to compare model versions on live traffic with statistical rigor, not eyeballing dashboards.",
  },
];

const outcomes = [
  "Model deployment reduced from weeks to hours with evaluation-gated CI/CD",
  "Zero-downtime deployments with canary analysis and automated rollback",
  "Regressions caught by evaluation pipeline before reaching production traffic",
  "Full lineage from training data through feature computation to serving",
  "Reproducible model configurations versioned alongside code",
  "ML teams deploying independently without infrastructure bottlenecks",
];

export default function MLOpsConsulting() {
  return (
    <Layout>
      <SEO
        title="MLOps Consulting | Model Deployment & ML Pipeline Experts"
        description="Expert MLOps consulting to get models from notebooks to production. We build model versioning, deployment infrastructure, and monitoring systems that scale."
        keywords="MLOps consulting, model deployment consulting, ML pipeline consulting, machine learning operations, model monitoring, ML infrastructure consulting"
        canonical="https://baselynesystems.com/services/mlops-consulting"
        structuredData={mlopsServiceSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              MLOps Consulting
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get AI from prototype to production
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              The gap between a working prototype and a production system is
              larger than most teams expect. We bridge that gap with
              infrastructure for deploying, versioning, and monitoring ML
              models and LLM-powered applications.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a
                  href="https://calendly.com/baselyne-systems/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Discuss Your MLOps Needs
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
              AI stuck in prototypes doesn't create value
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Your team built a model that performs well in a notebook. To get
                it into production, someone needs to package it into a container,
                write a serving endpoint, set up health checks, configure
                autoscaling, build an evaluation pipeline, implement canary
                deployment logic, and instrument monitoring. That's not ML
                work—that's infrastructure work.
              </p>
              <p>
                Most teams try to solve this with a platform like Kubeflow or
                SageMaker. Then they spend months configuring it, fight its
                opinions about how models should be structured, and end up with
                a system that's harder to debug than the original problem. The
                better approach is usually simpler: a model registry, a CI/CD
                pipeline with evaluation gates, a serving layer you actually
                understand, and monitoring that catches regressions before users
                do.
              </p>
              <p>
                We've built ML platforms that serve production traffic at
                Meta-scale. The lesson from that experience: the best MLOps
                platform is the smallest one that solves your actual problems,
                not the most featureful one.
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
              End-to-end MLOps infrastructure
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
                Outcomes from our MLOps engagements
              </h2>
              <p className="mt-4 text-muted-foreground">
                We focus on reducing time-to-production, improving model
                reliability, and building infrastructure that ML teams can
                operate independently.
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
                  <h3 className="font-semibold text-foreground">ML workflow audit</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We review your current model lifecycle—from training notebooks
                    through deployment to monitoring. We identify where the
                    bottlenecks are and what's needed to ship models reliably.
                    Typically 1–2 weeks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Platform build</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We build the minimum viable ML platform—registry, CI/CD with
                    evaluation gates, serving infrastructure, monitoring. Scoped
                    to your actual bottlenecks, not a generic MLOps stack. Most
                    implementations take 6–10 weeks.
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
                    Your ML team gets full ownership with documentation and
                    runbooks. Optional advisory retainer for design reviews,
                    architecture guidance, and technical consultations as your
                    ML practice matures.
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
              Ready to productionize your ML?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most engagements start with a 30-minute call to understand your
              model lifecycle and where the gaps are. No pitch deck—just a
              technical conversation.
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

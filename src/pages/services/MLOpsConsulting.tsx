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
      "Version control for models, prompts, and configurations. Track what changed, when, and why. Roll back to any previous version instantly.",
  },
  {
    icon: Server,
    title: "Deployment Infrastructure",
    description:
      "Serving infrastructure for ML models and LLM applications. Canary deployments, A/B testing, shadow mode, and automated rollback.",
  },
  {
    icon: BarChart3,
    title: "Evaluation & Monitoring",
    description:
      "Automated evaluation pipelines for model quality. Track accuracy, latency, cost, and drift. Catch regressions before users do.",
  },
  {
    icon: Workflow,
    title: "ML Pipeline Orchestration",
    description:
      "Automated training and inference pipelines. Scheduled retraining, data validation, model evaluation gates, and workflow management.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "Feedback loops from production to development. Capture failures, evaluate alternatives, and deploy improvements with confidence.",
  },
];

const outcomes = [
  "Deployment time reduced from weeks to hours",
  "Zero-downtime deployments with automated rollbacks",
  "Regressions caught in evaluation before production",
  "Full lineage from training data to production predictions",
  "Reproducible configurations with version control",
  "Self-service deployment for ML and AI teams",
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
                Your team has built models that work in development. But getting
                them into production—with proper versioning, monitoring, and the
                ability to roll back when things go wrong—is a different
                challenge entirely.
              </p>
              <p>
                Most organizations underestimate the operational complexity.
                Building a working model is maybe 20% of the work. The rest is
                infrastructure: versioning, evaluation pipelines, serving
                infrastructure, observability, and processes for continuous
                improvement.
              </p>
              <p>
                We've built and operated ML systems at Meta and other
                large-scale environments. We bring that experience to help you
                build systems that are reliable, observable, and maintainable.
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

      {/* CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Ready to productionize your ML?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Schedule a call to discuss your model deployment challenges and
              MLOps goals.
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

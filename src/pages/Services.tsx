import { ArrowRight, Database, GitBranch, Shield, Cpu, BarChart3, Lock, Workflow, Server, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO, professionalServiceSchema } from "@/components/SEO";

const services = [
  {
    id: "data-infrastructure",
    title: "Data Infrastructure",
    subtitle: "Build the foundation for reliable data",
    description: "Your data platform was built for analysts running SQL against yesterday's data. Now ML teams need sub-minute feature freshness, vector search over live documents, and CDC streams from operational databases. We rebuild the foundation without stopping the existing workloads.",
    link: "/services/data-infrastructure-consulting",
    capabilities: [
      {
        icon: Database,
        title: "Lakehouse Architecture",
        description: "We build on Apache Iceberg—it's catalog-agnostic, handles schema evolution cleanly, and the ecosystem is converging around it. Batch and incremental reads from the same tables, so analytics and ML training share a single source of truth.",
      },
      {
        icon: Workflow,
        title: "Pipeline Orchestration",
        description: "Dagster for new platforms—its asset-oriented model makes dependencies explicit and testing straightforward. Streaming on Kafka or Flink where freshness matters, connected to the same governance layer as batch processing.",
      },
      {
        icon: Shield,
        title: "Data Governance",
        description: "Column-level access controls, automated data quality contracts, and lineage that extends from source databases through embeddings and model training—not just to the warehouse.",
      },
    ],
  },
  {
    id: "mlops",
    title: "MLOps & Model Platforms",
    subtitle: "Get models from notebooks to production",
    description: "Most MLOps platforms are over-engineered for what teams actually need. We build the minimum viable platform—model registry, evaluation-gated CI/CD, serving infrastructure you can debug, and monitoring that catches regressions before users do. Then we extend only when the bottleneck shifts.",
    link: "/services/mlops-consulting",
    capabilities: [
      {
        icon: GitBranch,
        title: "Model Versioning & Registry",
        description: "MLflow for the registry, Git for configs, and an evaluation pipeline wired into CI that gates every promotion. No model reaches production without passing automated quality checks against a held-out set.",
      },
      {
        icon: Server,
        title: "Deployment Infrastructure",
        description: "vLLM for LLM serving—it handles KV-cache management, continuous batching, and quantized inference well. For traditional ML, a focused serving layer behind an autoscaler. We avoid heavy frameworks unless you need multi-model routing at scale.",
      },
      {
        icon: BarChart3,
        title: "Production Monitoring",
        description: "Prediction distribution monitoring as the primary signal—it catches drift before you have ground truth labels. Plus latency percentiles, token costs per request, and input data quality checks.",
      },
    ],
  },
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure",
    subtitle: "Scalable compute with cost control",
    description: "GPU utilization under 40% is the norm because autoscaling defaults aren't tuned for GPU spin-up latency and nobody's set up fractional allocation for inference workloads. We fix the infrastructure so your bill reflects actual usage, not idle capacity.",
    link: "/services/ai-infrastructure-consulting",
    capabilities: [
      {
        icon: Cpu,
        title: "Compute Orchestration",
        description: "Kubernetes with the NVIDIA GPU Operator, fractional GPU support for inference, and autoscaling tuned for GPU spin-up latency. Node pools sized for your actual workload mix, not one-size-fits-all.",
      },
      {
        icon: Gauge,
        title: "Cost Visibility",
        description: "Per-namespace cost attribution via OpenCost, broken down to the model and use case. Spot instances for training with checkpointing, reserved capacity for serving, and automated right-sizing based on actual utilization.",
      },
      {
        icon: Lock,
        title: "Security & Compliance",
        description: "Network policies isolating workloads by team. Secrets via external-secrets-operator, not baked into images. Audit logging that captures who deployed what model with what training data.",
      },
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <SEO
        title="AI, MLOps & Data Infrastructure Consulting Services"
        description="Expert consulting for AI infrastructure, MLOps, and data platforms. We design, build, and operate production-grade systems for data and ML teams."
        keywords="AI infrastructure consulting, MLOps consulting, data infrastructure consulting, ML platform consulting, machine learning consulting services, data engineering consulting"
        canonical="https://baselynesystems.com/services"
        structuredData={professionalServiceSchema}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We design, build, and operate production-grade data platforms and AI systems. Each engagement is scoped to your specific challenges and delivered by engineers who've built these systems at companies like Meta and Alphabet.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-layer-1" : "bg-layer-2"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                {service.title}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                {service.subtitle}
              </h2>
              <p className="mt-4 text-muted-foreground">{service.description}</p>
              <Button asChild variant="outline" className="mt-6">
                <Link to={service.link} className="inline-flex items-center gap-2">
                  Learn more about {service.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {service.capabilities.map((capability) => (
                <Card key={capability.title} className="border-border/50 bg-card">
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <capability.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every infrastructure challenge is different. Let's discuss your specific situation and identify the highest-impact improvements.
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


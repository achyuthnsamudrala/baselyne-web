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
    subtitle: "Build the foundation for reliable data at scale",
    description: "Large-scale data platforms need more than a good schema. They need operational maturity: clear ownership, automated quality checks, and recovery procedures that work at 3am.",
    link: "/services/data-infrastructure-consulting",
    capabilities: [
      {
        icon: Database,
        title: "Lakehouse Architecture",
        description: "Modern data platforms on Delta Lake, Iceberg, or Hudi. Designed for both analytical and ML workloads with proper governance from day one.",
      },
      {
        icon: Workflow,
        title: "Pipeline Orchestration",
        description: "Reliable batch and streaming pipelines with Airflow, Dagster, or Prefect. Includes monitoring, alerting, and runbooks for common failure modes.",
      },
      {
        icon: Shield,
        title: "Data Governance",
        description: "Lineage tracking, access controls, and quality metrics. Meet compliance requirements without slowing down your data team.",
      },
    ],
  },
  {
    id: "mlops",
    title: "MLOps & Model Platforms",
    subtitle: "Get models from notebooks to production",
    description: "The gap between a working model and a production service is larger than most teams expect. We bridge that gap with infrastructure that handles versioning, deployment, and monitoring.",
    link: "/services/mlops-consulting",
    capabilities: [
      {
        icon: GitBranch,
        title: "Model Versioning & Registry",
        description: "Track experiments, manage model artifacts, and maintain clear lineage from training data to production predictions.",
      },
      {
        icon: Server,
        title: "Deployment Infrastructure",
        description: "Serving infrastructure for batch and real-time inference. Includes canary deployments, A/B testing, and rollback procedures.",
      },
      {
        icon: BarChart3,
        title: "Production Monitoring",
        description: "Detect drift, track latency, and monitor prediction quality. Alert on the metrics that matter before users notice problems.",
      },
    ],
  },
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure",
    subtitle: "Scalable compute with cost control",
    description: "GPU costs can spiral without proper controls. We build platforms that give teams the compute they need while maintaining visibility and control over spend.",
    link: "/services/ai-infrastructure-consulting",
    capabilities: [
      {
        icon: Cpu,
        title: "Compute Orchestration",
        description: "Kubernetes-based platforms for training and inference. Right-sized clusters with autoscaling that responds to actual demand.",
      },
      {
        icon: Gauge,
        title: "Cost Attribution",
        description: "Clear visibility into cost per team, project, and model. Budgets and alerts before you get a surprise bill.",
      },
      {
        icon: Lock,
        title: "Security & Compliance",
        description: "Network isolation, secrets management, and audit logging. Infrastructure that passes security reviews the first time.",
      },
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <SEO
        title="AI, MLOps & Data Infrastructure Consulting Services"
        description="Expert consulting for AI infrastructure, MLOps, and data platforms. We design, build, and operate production-grade systems for data and ML teams at scale."
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
              We design, build, and operate production-grade data platforms and AI systems. Each engagement is scoped to your specific challenges and delivered by engineers who've built these systems at scale.
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


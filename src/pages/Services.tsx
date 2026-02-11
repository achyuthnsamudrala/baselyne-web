import { ArrowRight, Database, GitBranch, Cpu, Search, Wrench, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, professionalServiceSchema } from "@/components/SEO";

const services = [
  {
    icon: Database,
    title: "Data Infrastructure",
    description:
      "Lakehouse architecture, real-time and batch pipelines, governance, and vector search—built for AI workloads, not just dashboards.",
    link: "/services/data-infrastructure-consulting",
  },
  {
    icon: GitBranch,
    title: "MLOps & Model Platforms",
    description:
      "Model registry, evaluation-gated CI/CD, serving infrastructure, and production monitoring—the minimum viable platform that actually works.",
    link: "/services/mlops-consulting",
  },
  {
    icon: Cpu,
    title: "AI Infrastructure",
    description:
      "GPU orchestration, fractional allocation, cost attribution, and autoscaling tuned for inference—so your bill reflects usage, not idle capacity.",
    link: "/services/ai-infrastructure-consulting",
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
              We design, build, and operate production-grade data platforms and
              AI systems. Each engagement is scoped to your specific challenges
              and delivered by engineers who've built these systems at companies
              like Meta and Alphabet.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Three areas of focus
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <Button asChild variant="link" className="mt-4 h-auto p-0">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1 text-sm text-primary"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Three ways to engage
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement starts with a conversation about your specific
              challenges. From there, we match the right model to your situation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Assessment</h3>
                <p className="mt-1 text-xs font-medium text-primary">2–4 weeks</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  We audit your current architecture, identify bottlenecks and
                  risks, and deliver a prioritized roadmap with specific
                  recommendations. You get a clear picture of what to fix first
                  and why.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Implementation</h3>
                <p className="mt-1 text-xs font-medium text-primary">6–12 weeks</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Scoped projects with defined deliverables. We design, build,
                  and hand off production-ready infrastructure—with documentation
                  and knowledge transfer so your team can operate it independently.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Advisory Retainer</h3>
                <p className="mt-1 text-xs font-medium text-primary">Ongoing</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  For teams that want ongoing access to expert guidance. Monthly
                  retainer for architecture reviews, design consultations, and
                  technical advisory as your systems evolve—your team builds, we
                  advise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most engagements start with a 30-minute call to understand your
              current stack and challenges. No pitch deck—just a technical
              conversation about what's not working and what would.
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

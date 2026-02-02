import { ArrowRight, Building2, Database, Shield, Users, Zap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, organizationSchema } from "@/components/SEO";

const experience = [
  {
    icon: Database,
    metric: "Petabyte-scale",
    title: "Data platforms",
    description: "Designed and operated data infrastructure handling petabytes of data across distributed systems.",
  },
  {
    icon: Zap,
    metric: "100M+ QPS",
    title: "High-throughput systems",
    description: "Built and maintained systems serving hundreds of millions of queries per second at Meta.",
  },
  {
    icon: Shield,
    metric: "GDPR compliance",
    title: "Regulatory readiness",
    description: "Led data platform work for GDPR readiness and compliance at Meta, handling complex data governance requirements.",
  },
  {
    icon: Building2,
    metric: "Nearly a decade",
    title: "Engineering depth",
    description: "Infrastructure experience including six years at Meta and Alphabet, building systems that serve billions of users.",
  },
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Baselyne Systems - AI & Data Infrastructure Consulting Experts"
        description="Baselyne Systems is a founder-led AI infrastructure consulting firm with experience from Meta and Alphabet. We help teams build production-grade ML and data systems."
        keywords="AI infrastructure consulting firm, MLOps consultants, data engineering experts, ML platform consulting, machine learning infrastructure company"
        canonical="https://baselynesystems.com/about"
        structuredData={organizationSchema}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Baselyne Systems
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A founder-led consultancy focused on AI infrastructure, data engineering, and MLOps. We bring large-scale engineering experience to companies building production ML systems.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Background
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Built at scale, delivered at your scale
            </h2>
            
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Baselyne Systems was founded with a simple observation: most companies struggling with ML infrastructure aren't facing novel technical problems. They're facing problems that have been solved at larger scales—but those solutions aren't accessible without the right experience.
              </p>
              <p>
                The founder brings nearly a decade of infrastructure engineering experience, including six years at Meta and Alphabet working on the kind of systems most companies only read about: petabyte-scale data platforms, systems handling 100M+ queries per second, and the complex data governance work required for GDPR compliance at Meta.
              </p>
              <p>
                This isn't a personal résumé—it's operating credibility. When we recommend an architecture, it's because we've seen what works and what breaks at scale. When we suggest a particular approach to monitoring or governance, it's grounded in real operational experience.
              </p>
              <p>
                We take that experience and apply it to companies at earlier stages, helping them build infrastructure that will scale with their ambitions rather than becoming a bottleneck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Operating Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Engineering credibility at scale
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map((item) => (
              <Card key={item.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-4 text-2xl font-bold text-foreground">{item.metric}</p>
                  <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Philosophy
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Systems thinking, not feature shipping
            </h2>
            
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                We approach every engagement as systems engineers. That means thinking about failure modes, operational burden, and long-term maintainability—not just whether something works in a demo.
              </p>
              <p>
                The goal is never to be clever. It's to build systems that are boring in the best way: predictable, observable, and recoverable. Systems that let your team sleep through the night and focus on work that matters.
              </p>
              <p>
                We're selective about the engagements we take on. We work best with teams that have real problems at scale, leadership that understands the value of infrastructure investment, and engineers who want to learn and own what we build together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Let's talk about your infrastructure
            </h2>
            <p className="mt-4 text-muted-foreground">
              Schedule a conversation to discuss your challenges and see if we're the right fit.
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


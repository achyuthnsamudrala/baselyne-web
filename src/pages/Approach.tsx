import { ArrowRight, Search, Target, Wrench, CheckCircle2, FileText, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const phases = [
  {
    step: "01",
    icon: Search,
    title: "Assessment",
    duration: "1-2 weeks",
    description: "We start by understanding your current state. This means reviewing architecture, talking to your team, and identifying the critical gaps between where you are and where you need to be.",
    outputs: [
      "Architecture review and gap analysis",
      "Risk assessment and prioritisation",
      "Recommended roadmap with clear milestones",
    ],
  },
  {
    step: "02",
    icon: Target,
    title: "Scope Definition",
    duration: "Collaborative",
    description: "Based on the assessment, we define a focused scope. We're explicit about what's in and out, what success looks like, and the trade-offs involved in different approaches.",
    outputs: [
      "Detailed scope document",
      "Success criteria and acceptance tests",
      "Timeline and resource requirements",
    ],
  },
  {
    step: "03",
    icon: Wrench,
    title: "Implementation",
    duration: "Varies by scope",
    description: "We build alongside your team, not in isolation. Weekly syncs, shared code repositories, and continuous documentation ensure knowledge transfer happens naturally.",
    outputs: [
      "Production-ready infrastructure",
      "Comprehensive documentation",
      "Runbooks and operational guides",
    ],
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Handover",
    duration: "2-4 weeks",
    description: "Before we step back, we ensure your team can operate independently. This includes training, shadowed on-call rotations, and support during the transition period.",
    outputs: [
      "Team training sessions",
      "Operational handover",
      "Post-engagement support window",
    ],
  },
];

const principles = [
  {
    icon: Target,
    title: "Production first",
    description: "Everything we build is designed for production from day one. No prototypes that need to be rewritten, no 'we'll add monitoring later' shortcuts.",
  },
  {
    icon: FileText,
    title: "Documentation as deliverable",
    description: "Code without documentation creates dependency. We deliver systems your team can understand, operate, and extend without us.",
  },
  {
    icon: Users,
    title: "Knowledge transfer built-in",
    description: "We work alongside your engineers, not in a silo. Skills transfer happens through pairing, reviews, and shared decision-making.",
  },
];

export default function Approach() {
  return (
    <Layout>
      <SEO
        title="Our Approach | How We Deliver AI Projects"
        description="Structured AI and MLOps consulting: from assessment to handover, we deliver production-ready systems with knowledge transfer."
        keywords="AI consulting process, MLOps implementation methodology, data infrastructure project delivery, ML platform consulting approach"
        canonical="https://baselynesystems.com/approach"
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              How We Work
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Our approach is built around production readiness, not impressive demos. Every engagement follows a structured process designed to deliver working systems your team can operate.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Engagement Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              From assessment to handover
            </h2>
          </div>

          <div className="mt-16 space-y-8">
            {phases.map((phase, index) => (
              <div
                key={phase.step}
                className="relative grid gap-6 lg:grid-cols-12 lg:gap-12"
              >
                {/* Timeline line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-20 hidden h-[calc(100%+2rem)] w-px bg-border lg:left-[4.5rem] lg:block" />
                )}

                {/* Step number */}
                <div className="flex items-start gap-4 lg:col-span-2 lg:flex-col lg:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                    {phase.step}
                  </div>
                  <span className="text-sm text-muted-foreground lg:text-center">
                    {phase.duration}
                  </span>
                </div>

                {/* Content */}
                <Card className="border-border/50 bg-card lg:col-span-10">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-3">
                      <phase.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-muted-foreground">{phase.description}</p>
                    <div className="mt-6">
                      <p className="text-sm font-medium text-foreground">Deliverables:</p>
                      <ul className="mt-2 space-y-2">
                        {phase.outputs.map((output) => (
                          <li
                            key={output}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            {output}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Delivery Principles
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              What guides our work
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {principles.map((principle) => (
              <Card key={principle.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Ready to discuss your project?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Schedule a 30-minute call. We'll talk through your current challenges and whether we're the right fit.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/achyuth-1995/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}


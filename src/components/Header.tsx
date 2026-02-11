import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Database, GitBranch, Cpu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/baselyne-logo.jpg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Approach", href: "/approach" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Data Infrastructure", href: "/services/data-infrastructure-consulting", icon: Database },
  { name: "MLOps & Model Platforms", href: "/services/mlops-consulting", icon: GitBranch },
  { name: "AI Infrastructure", href: "/services/ai-infrastructure-consulting", icon: Cpu },
];

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Baselyne Systems" className="h-10 w-10 rounded-lg" />
          <span className="text-xl font-semibold text-foreground">Baselyne Systems</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) =>
            item.name === "Services" ? (
              <div key={item.name} className="group relative">
                <Link
                  to={item.href}
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    isServicesActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                  <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="w-64 rounded-lg border border-border/50 bg-background p-2 shadow-lg">
                    <Link
                      to="/services"
                      className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        location.pathname === "/services"
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      All Services
                    </Link>
                    <div className="my-1 border-t border-border/50" />
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                          location.pathname === service.href
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <service.icon className="h-4 w-4 shrink-0" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
          <Button asChild className="ml-4">
            <a
              href="https://calendly.com/baselyne-systems/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-4 pt-8">
              {navigation.map((item) =>
                item.name === "Services" ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className={`flex w-full items-center justify-between px-4 py-2 text-base font-medium transition-colors rounded-md ${
                        isServicesActive
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 opacity-50 transition-transform ${
                          servicesExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {servicesExpanded && (
                      <div className="mt-1 ml-4 flex flex-col gap-1">
                        <Link
                          to="/services"
                          onClick={() => setOpen(false)}
                          className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                        >
                          All Services
                        </Link>
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-2 px-4 py-1.5 text-sm transition-colors rounded-md ${
                              location.pathname === service.href
                                ? "text-primary bg-primary/5"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            <service.icon className="h-3.5 w-3.5 shrink-0" />
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-2 text-base font-medium transition-colors rounded-md ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Button asChild className="mt-4">
                <a
                  href="https://calendly.com/baselyne-systems/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

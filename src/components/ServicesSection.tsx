import { useEffect, useRef, useState } from "react";
import { Code2, Database, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "End-to-end web application development tailored to your business needs. From responsive frontends to scalable backends, I deliver solutions that perform.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description:
      "Efficient database architecture that scales with your growth. Performance tuning, query optimization, and data modeling for maximum efficiency.",
  },
  {
    icon: Rocket,
    title: "SaaS MVP Construction",
    description:
      "Transform your idea into a market-ready product. Rapid MVP development with clean architecture that supports future scaling and iterations.",
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 px-6 relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Solutions That <span className="text-gradient">Scale</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

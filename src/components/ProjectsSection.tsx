import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Wired",
    tagline: "AI-Driven Personal Automation System",
    description:
      "A hybrid cloud/local orchestration platform inspired by complex system architectures. Features intelligent task automation, real-time monitoring, and seamless integration with multiple services.",
    image: "/wired (2).jpg",
    tags: [".NET", "Python", "AI/ML", "Cloud"],
  },
  {
    title: "VistaTravel",
    tagline: "Full-Cycle Booking Platform",
    description:
      "A comprehensive travel solution featuring distinct Client and Provider dashboards with real-time state management. Includes booking engine, payment processing, and analytics dashboard.",
    image: "/vistaTravel.png",
    tags: ["Angular", ".NET", "SQL Server", "REST API"],
  },
  {
    title: "ElectroTech",
    tagline: "Scalable E-Commerce Architecture",
    description:
      "An electronics store focusing on database efficiency and user experience. Built with performance-first approach, featuring inventory management and order processing systems.",
    image: "/onlineStore.jpg",
    tags: [".NET", "SQL Server", "Tailwind", "Stripe"],
  },
  {
    title: "Coffee Culture",
    tagline: "Brand-Centric Web Design",
    description:
      "A highly responsive, aesthetic interface for a local business. Emphasizes brand storytelling through modern design patterns and smooth animations.",
    image: "/coffeShop.jpg",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

const ProjectCard = ({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image - switches position based on index */}
      <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="glass-card p-2 group overflow-hidden">
          <div className="relative aspect-video bg-secondary/50 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <div className="space-y-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">
            {project.tagline}
          </p>
          <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-4 pt-4">
            <Button variant="outline" size="sm" className="gap-2 border-primary/50 hover:bg-primary/10">
              <Github className="w-4 h-4" />
              View Code
            </Button>
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Featured Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Projects That <span className="text-gradient">Deliver Results</span>
          </h3>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

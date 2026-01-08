import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { SiDotnet, SiAngular, SiTailwindcss, SiDjango, SiLinux, SiMysql } from "react-icons/si";

const techStack = [
  { name: ".NET" },
  { name: "Angular" },
  { name: "Tailwind" },
  { name: "Django" },
  { name: "Linux" },
  { name: "SQL" },
];

const getInitials = (name: string) => {
  if (name.toLowerCase() === '.net') return 'NET';
  if (name.toLowerCase() === 'sql') return 'SQL';
  const parts = name.split(/\s|-/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const iconMap: Record<string, IconType> = {
  '.net': SiDotnet,
  angular: SiAngular,
  tailwind: SiTailwindcss,
  django: SiDjango,
  linux: SiLinux,
  sql: SiMysql,
};

const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div
            className={`glass-card p-8 md:p-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Full-Stack Engineer & <span className="text-gradient">Problem Solver</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a Computer Science graduate and Full-Stack Engineer who bridges the gap 
              between robust data architecture and intuitive user interfaces. My focus is on 
              creating automated systems and e-commerce solutions that drive efficiency.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 text-center lg:text-left">
              Tech Stack
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="glass-card p-6 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-2 group-hover:bg-primary/20 transition-all duration-300">
                        {(() => {
                          const key = tech.name.toLowerCase();
                          const Icon = iconMap[key];
                          return Icon ? <Icon className="w-8 h-8" /> : <span className="font-semibold">{getInitials(tech.name)}</span>;
                        })()}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-foreground">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

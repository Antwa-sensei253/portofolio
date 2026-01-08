import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/ahmed-profile.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/Antwa-sensei253", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-elsayed-8b9aa6234/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/AntwaAhmed", label: "Twitter" },
  { icon: Mail, href: "mailto:ahmed.qwerty253@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background elements with vibrant colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,112,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,201,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <p className="text-lg text-muted-foreground mb-4 animate-fade-up">
              Hello, I'm <span className="text-foreground font-semibold">Ahmed Elsayed</span>
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-up">
              <span className="text-gradient">Engineered</span>
              <span className="text-foreground"> for Performance.</span>
              <br />
              <span className="text-foreground">Designed for </span>
              <span className="text-gradient">Users.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up-delay-1">
              I build scalable web applications using .NET, Angular, and Python. 
              From complex backend orchestration to pixel-perfect frontends.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-fade-up-delay-2">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/20 hover:text-foreground hover:border-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 animate-fade-up-delay-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="p-3 rounded-full glass-card hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up">
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Ahmed Elsayed" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

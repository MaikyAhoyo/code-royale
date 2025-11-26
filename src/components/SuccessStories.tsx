import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "María González",
    role: "Full Stack Developer en Google",
    company: "Google",
    story: "Comencé sin conocimientos de programación. En 8 meses conseguí mi primer trabajo como desarrolladora. Los proyectos prácticos y las tutorías personalizadas fueron clave en mi éxito.",
    initials: "MG"
  },
  {
    name: "Carlos Ruiz",
    role: "Senior Backend Engineer",
    company: "Amazon",
    story: "Después de completar el módulo de Python y Java, mi carrera dio un giro completo. Ahora trabajo en uno de los equipos más importantes de Amazon.",
    initials: "CR"
  },
  {
    name: "Ana Martínez",
    role: "Mobile Developer",
    company: "Spotify",
    story: "El curso de React Native me abrió las puertas al desarrollo móvil. La metodología práctica y el apoyo constante hicieron toda la diferencia.",
    initials: "AM"
  },
  {
    name: "Diego Fernández",
    role: "Machine Learning Engineer",
    company: "Microsoft",
    story: "Los proyectos de Python enfocados en ML me prepararon perfectamente para mi rol actual. La plataforma es increíblemente completa.",
    initials: "DF"
  }
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Historias de <span className="text-gradient">Éxito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce a algunos de nuestros estudiantes que ahora trabajan en las mejores empresas tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/30 transition-colors">
                <Quote className="h-16 w-16" />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-14 w-14 border-2 border-primary/50">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {story.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                    <p className="text-xs text-primary">{story.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{story.story}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

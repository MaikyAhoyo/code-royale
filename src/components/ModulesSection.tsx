import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Smartphone, Terminal, Braces } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    icon: Terminal,
    title: "Python",
    level: "Principiante a Avanzado",
    description: "Desde sintaxis básica hasta machine learning y análisis de datos",
    duration: "120 horas",
    students: "15.2K",
    color: "text-yellow-500"
  },
  {
    icon: Code2,
    title: "JavaScript",
    level: "Principiante a Avanzado",
    description: "Desarrollo web moderno, React, Node.js y frameworks populares",
    duration: "140 horas",
    students: "18.5K",
    color: "text-yellow-400"
  },
  {
    icon: Braces,
    title: "Java",
    level: "Intermedio",
    description: "Programación orientada a objetos, Spring Boot y aplicaciones enterprise",
    duration: "100 horas",
    students: "12.8K",
    color: "text-orange-500"
  },
  {
    icon: Database,
    title: "C++",
    level: "Avanzado",
    description: "Programación de sistemas, algoritmos y optimización de rendimiento",
    duration: "90 horas",
    students: "8.3K",
    color: "text-blue-400"
  },
  {
    icon: Globe,
    title: "TypeScript",
    level: "Intermedio",
    description: "JavaScript con tipos, desarrollo escalable y mejores prácticas",
    duration: "60 horas",
    students: "11.7K",
    color: "text-blue-500"
  },
  {
    icon: Smartphone,
    title: "React Native",
    level: "Intermedio a Avanzado",
    description: "Desarrollo de aplicaciones móviles multiplataforma con JavaScript",
    duration: "80 horas",
    students: "9.1K",
    color: "text-cyan-400"
  }
];

const ModulesSection = () => {
  return (
    <section id="modules" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Módulos de <span className="text-gradient">Aprendizaje</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige tu lenguaje favorito y comienza tu viaje en la programación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <module.icon className={`h-12 w-12 ${module.color}`} />
                  <Badge variant="secondary">{module.level}</Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>⏱️ {module.duration}</span>
                  <span>👥 {module.students} estudiantes</span>
                </div>
                {module.title === "C++" ? (
                  <Link to="/cpp" className="block">
                    <Button className="w-full" variant="outline">
                      Ver Módulo
                    </Button>
                  </Link>
                ) : (
                  <Button className="w-full" variant="outline">
                    Ver Módulo
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;

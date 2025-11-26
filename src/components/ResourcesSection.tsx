import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileCode, MessageSquare, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Documentación Completa",
    description: "Guías detalladas y referencias rápidas para cada lenguaje",
    items: ["Python Docs", "JavaScript MDN", "Java Tutorials"],
    color: "text-blue-400"
  },
  {
    icon: Video,
    title: "Biblioteca de Videos",
    description: "Más de 500 horas de contenido en video actualizado",
    items: ["Tutoriales", "Masterclasses", "Live Coding"],
    color: "text-purple-400"
  },
  {
    icon: FileCode,
    title: "Proyectos de Ejemplo",
    description: "Repositorios con código fuente de proyectos reales",
    items: ["GitHub Repos", "Code Snippets", "Templates"],
    color: "text-green-400"
  },
  {
    icon: MessageSquare,
    title: "Comunidad Activa",
    description: "Únete a nuestra comunidad de desarrolladores",
    items: ["Discord", "Foros", "Eventos"],
    color: "text-orange-400"
  },
  {
    icon: Download,
    title: "Herramientas y Software",
    description: "Acceso a herramientas profesionales de desarrollo",
    items: ["IDEs", "Extensions", "Frameworks"],
    color: "text-cyan-400"
  },
  {
    icon: ExternalLink,
    title: "Links Útiles",
    description: "Recursos externos seleccionados por expertos",
    items: ["Blogs", "Podcasts", "Newsletters"],
    color: "text-pink-400"
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Recursos <span className="text-gradient">Útiles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para acelerar tu aprendizaje en un solo lugar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <resource.icon className={`h-10 w-10 ${resource.color} mb-3`} />
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {resource.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:text-primary">
                  Explorar
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;

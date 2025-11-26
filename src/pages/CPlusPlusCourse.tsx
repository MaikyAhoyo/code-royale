import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, PlayCircle, BookOpen, Code2 } from "lucide-react";

const topics = [
  {
    id: 1,
    title: "Fundamentos de C++",
    subtopics: [
      { id: 1, name: "Sintaxis Básica", slug: "sintaxis-basica" },
      { id: 2, name: "Variables y Tipos de Datos", slug: "variables-tipos" },
      { id: 3, name: "Operadores", slug: "operadores" },
      { id: 4, name: "Estructuras de Control", slug: "estructuras-control" }
    ]
  },
  {
    id: 2,
    title: "Programación Orientada a Objetos",
    subtopics: [
      { id: 1, name: "Clases y Objetos", slug: "clases-objetos" },
      { id: 2, name: "Herencia", slug: "herencia" },
      { id: 3, name: "Polimorfismo", slug: "polimorfismo" },
      { id: 4, name: "Encapsulamiento", slug: "encapsulamiento" }
    ]
  },
  {
    id: 3,
    title: "Gestión de Memoria",
    subtopics: [
      { id: 1, name: "Punteros", slug: "punteros" },
      { id: 2, name: "Referencias", slug: "referencias" },
      { id: 3, name: "Asignación Dinámica", slug: "asignacion-dinamica" },
      { id: 4, name: "Smart Pointers", slug: "smart-pointers" }
    ]
  },
  {
    id: 4,
    title: "Estructuras de Datos Avanzadas",
    subtopics: [
      { id: 1, name: "Vectores y Arrays", slug: "vectores-arrays" },
      { id: 2, name: "Listas Enlazadas", slug: "listas-enlazadas" },
      { id: 3, name: "Árboles Binarios", slug: "arboles-binarios" },
      { id: 4, name: "Grafos", slug: "grafos" }
    ]
  },
  {
    id: 5,
    title: "Algoritmos y Optimización",
    subtopics: [
      { id: 1, name: "Algoritmos de Ordenamiento", slug: "ordenamiento" },
      { id: 2, name: "Búsqueda Binaria", slug: "busqueda-binaria" },
      { id: 3, name: "Complejidad Algorítmica", slug: "complejidad" },
      { id: 4, name: "Optimización de Código", slug: "optimizacion" }
    ]
  },
  {
    id: 6,
    title: "Programación de Sistemas",
    subtopics: [
      { id: 1, name: "Manejo de Archivos", slug: "archivos" },
      { id: 2, name: "Threads y Concurrencia", slug: "threads" },
      { id: 3, name: "Programación de Red", slug: "redes" },
      { id: 4, name: "Interacción con Hardware", slug: "hardware" }
    ]
  }
];

const CPlusPlusCourse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <Link to="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Volver a Cursos
          </Button>
        </Link>

        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Curso de <span className="text-gradient">C++</span>
            </h1>
            <Badge variant="secondary" className="text-lg px-4 py-1">Avanzado</Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Domina la programación de sistemas, algoritmos avanzados y optimización de rendimiento con C++. 
            Desde los fundamentos hasta técnicas profesionales de desarrollo.
          </p>
          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">⏱️ 90 horas</span>
            <span className="flex items-center gap-2">👥 8.3K estudiantes</span>
            <span className="flex items-center gap-2">📚 6 módulos principales</span>
          </div>
        </div>

        <div className="space-y-8">
          {topics.map((topic) => (
            <Card key={topic.id} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  {topic.title}
                </CardTitle>
                <CardDescription>
                  {topic.subtopics.length} subtemas en este módulo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {topic.subtopics.map((subtopic) => (
                    <Link
                      key={subtopic.id}
                      to={`/cpp/tema/${subtopic.slug}`}
                      className="group"
                    >
                      <div className="p-4 rounded-lg border border-border bg-secondary/20 hover:border-primary/50 hover:bg-secondary/40 transition-all duration-300 hover:glow-primary">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <BookOpen className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold group-hover:text-primary transition-colors">
                                {subtopic.name}
                              </h3>
                            </div>
                          </div>
                          <PlayCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CPlusPlusCourse;

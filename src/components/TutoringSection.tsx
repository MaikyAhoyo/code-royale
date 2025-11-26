import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video } from "lucide-react";

const TutoringSection = () => {
  return (
    <section id="tutoring" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Tutorías <span className="text-gradient">Personalizadas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recibe ayuda individual de expertos en la industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Sesiones 1 a 1</h3>
                    <p className="text-muted-foreground text-sm">
                      Videollamadas privadas con mentores experimentados
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horarios Flexibles</h3>
                    <p className="text-muted-foreground text-sm">
                      Agenda sesiones según tu disponibilidad
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mentores Expertos</h3>
                    <p className="text-muted-foreground text-sm">
                      Profesionales trabajando en FAANG y startups
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Revisión de Código</h3>
                    <p className="text-muted-foreground text-sm">
                      Feedback detallado en tus proyectos y ejercicios
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-primary/5 border-primary/50">
                <CardContent className="pt-6">
                  <Badge className="mb-4">Plan Premium</Badge>
                  <h3 className="text-2xl font-bold mb-2">Tutoría Ilimitada</h3>
                  <p className="text-4xl font-bold text-primary mb-4">
                    $99<span className="text-lg text-muted-foreground">/mes</span>
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Sesiones ilimitadas de tutoría
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Revisión de código en 24h
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Acceso a todos los cursos
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Certificados oficiales
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Proyectos exclusivos
                    </li>
                  </ul>
                  <Button className="w-full glow-primary" size="lg">
                    Empezar Ahora
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <Badge variant="outline" className="mb-4">Plan Básico</Badge>
                  <h3 className="text-2xl font-bold mb-2">Tutoría Mensual</h3>
                  <p className="text-4xl font-bold mb-4">
                    $29<span className="text-lg text-muted-foreground">/mes</span>
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      2 sesiones mensuales
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Acceso a cursos básicos
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Comunidad de estudiantes
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" size="lg">
                    Probar Gratis
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutoringSection;

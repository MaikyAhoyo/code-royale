import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, PlayCircle, BookOpen, Clock } from "lucide-react";

const topicContent: Record<string, {
  title: string;
  category: string;
  duration: string;
  theory: string[];
  videoId: string;
  nextTopic?: string;
  prevTopic?: string;
}> = {
  "sintaxis-basica": {
    title: "Sintaxis Básica",
    category: "Fundamentos de C++",
    duration: "45 min",
    theory: [
      "C++ es un lenguaje de programación de propósito general que soporta programación procedural, orientada a objetos y genérica. Su sintaxis básica es fundamental para cualquier programador.",
      "Un programa básico en C++ consta de varias partes esenciales: directivas de preprocesador (#include), función principal (main), y declaraciones de variables y funciones.",
      "La estructura básica de un programa C++ incluye:\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"¡Hola Mundo!\" << endl;\n    return 0;\n}\n```",
      "Los comentarios en C++ pueden ser de línea única (//) o de múltiples líneas (/* */). Son esenciales para documentar el código y hacerlo más legible.",
      "La función main() es el punto de entrada de cualquier programa C++. Debe retornar un valor entero, típicamente 0 para indicar éxito o un valor distinto para indicar error.",
      "Las sentencias en C++ terminan con punto y coma (;). Los bloques de código se delimitan con llaves { }. La indentación, aunque no obligatoria, es crucial para la legibilidad."
    ],
    videoId: "dQw4w9WgXcQ",
    nextTopic: "variables-tipos"
  },
  "variables-tipos": {
    title: "Variables y Tipos de Datos",
    category: "Fundamentos de C++",
    duration: "60 min",
    theory: [
      "Las variables en C++ son contenedores para almacenar datos. Cada variable debe ser declarada con un tipo específico antes de usarse, lo que hace a C++ un lenguaje fuertemente tipado.",
      "Los tipos de datos fundamentales en C++ incluyen:\n• int: números enteros (4 bytes)\n• float: números decimales (4 bytes)\n• double: números decimales de doble precisión (8 bytes)\n• char: caracteres individuales (1 byte)\n• bool: valores booleanos true/false",
      "Declaración de variables:\n\n```cpp\nint edad = 25;\nfloat altura = 1.75;\ndouble pi = 3.14159265359;\nchar inicial = 'J';\nbool esEstudiante = true;\n```",
      "Los modificadores de tipo permiten ajustar el rango y características de los tipos básicos: signed, unsigned, short, long. Por ejemplo, 'unsigned int' solo almacena valores positivos.",
      "El tipo de dato string (cadena de caracteres) requiere incluir la biblioteca <string>. Las strings en C++ son objetos que facilitan la manipulación de texto.",
      "La palabra clave 'const' permite declarar constantes, es decir, variables cuyo valor no puede cambiar después de la inicialización. Es una buena práctica usar const para valores que no deben modificarse."
    ],
    videoId: "dQw4w9WgXcQ",
    prevTopic: "sintaxis-basica",
    nextTopic: "operadores"
  },
  "operadores": {
    title: "Operadores",
    category: "Fundamentos de C++",
    duration: "50 min",
    theory: [
      "Los operadores en C++ son símbolos especiales que indican al compilador que realice operaciones específicas. Son fundamentales para manipular datos y controlar el flujo del programa.",
      "Operadores Aritméticos realizan operaciones matemáticas básicas:\n• + (suma)\n• - (resta)\n• * (multiplicación)\n• / (división)\n• % (módulo, resto de división)",
      "Operadores de Asignación:\n• = (asignación simple)\n• += (suma y asigna)\n• -= (resta y asigna)\n• *= (multiplica y asigna)\n• /= (divide y asigna)",
      "Operadores de Comparación devuelven valores booleanos:\n• == (igual a)\n• != (diferente de)\n• > (mayor que)\n• < (menor que)\n• >= (mayor o igual)\n• <= (menor o igual)",
      "Operadores Lógicos para expresiones booleanas:\n• && (AND lógico)\n• || (OR lógico)\n• ! (NOT lógico)",
      "Operadores de Incremento/Decremento:\n• ++ (incrementa en 1)\n• -- (decrementa en 1)\nPueden usarse como prefijo (++x) o sufijo (x++), con comportamientos ligeramente diferentes en expresiones complejas."
    ],
    videoId: "dQw4w9WgXcQ",
    prevTopic: "variables-tipos",
    nextTopic: "estructuras-control"
  },
  "clases-objetos": {
    title: "Clases y Objetos",
    category: "Programación Orientada a Objetos",
    duration: "75 min",
    theory: [
      "La Programación Orientada a Objetos (POO) es un paradigma que organiza el código en torno a objetos que contienen datos y comportamientos. Las clases son plantillas para crear objetos.",
      "Una clase define las propiedades (atributos) y comportamientos (métodos) que tendrán los objetos creados a partir de ella. Es como un plano para construir objetos.",
      "Definición básica de clase:\n\n```cpp\nclass Persona {\nprivate:\n    string nombre;\n    int edad;\npublic:\n    void setNombre(string n) { nombre = n; }\n    string getNombre() { return nombre; }\n};\n```",
      "Los modificadores de acceso controlan la visibilidad de los miembros:\n• private: solo accesible dentro de la clase\n• public: accesible desde cualquier parte\n• protected: accesible en la clase y clases derivadas",
      "Los constructores son métodos especiales que se ejecutan automáticamente al crear un objeto. Sirven para inicializar los atributos del objeto con valores predeterminados o personalizados.",
      "Los objetos son instancias de una clase. Se crean usando el nombre de la clase:\n\n```cpp\nPersona persona1;\npersona1.setNombre(\"Juan\");\n```"
    ],
    videoId: "dQw4w9WgXcQ",
    nextTopic: "herencia"
  },
  "punteros": {
    title: "Punteros",
    category: "Gestión de Memoria",
    duration: "90 min",
    theory: [
      "Los punteros son variables que almacenan direcciones de memoria en lugar de valores directos. Son una característica poderosa y distintiva de C++ que permite manipulación directa de memoria.",
      "Un puntero se declara usando el operador *. El operador & obtiene la dirección de memoria de una variable:\n\n```cpp\nint numero = 42;\nint* ptr = &numero;  // ptr apunta a numero\n```",
      "El operador de desreferencia (*) accede al valor almacenado en la dirección apuntada:\n\n```cpp\ncout << *ptr;  // Imprime 42\n*ptr = 100;    // Modifica el valor de numero\n```",
      "Los punteros son esenciales para:\n• Asignación dinámica de memoria\n• Paso eficiente de grandes estructuras a funciones\n• Implementación de estructuras de datos complejas\n• Interacción con APIs de bajo nivel",
      "Puntero nulo: un puntero puede inicializarse como nullptr para indicar que no apunta a ninguna dirección válida. Siempre verificar antes de desreferenciar.",
      "IMPORTANTE: Los punteros mal gestionados pueden causar errores graves como fugas de memoria, acceso a memoria inválida o corrupción de datos. Requieren cuidado y buenas prácticas."
    ],
    videoId: "dQw4w9WgXcQ",
    nextTopic: "referencias"
  }
};

const TopicDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? topicContent[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tema no encontrado</h1>
          <Link to="/cpp">
            <Button>Volver al curso</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <Link to="/cpp">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Volver al Curso
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary">{content.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              {content.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {content.duration}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Teoría y Práctica
              </span>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <PlayCircle className="h-6 w-6 text-primary" />
                Video Tutorial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full aspect-video bg-secondary/50 rounded-lg overflow-hidden group">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${content.videoId}`}
                  title={content.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Video explicativo completo del tema con ejemplos prácticos y ejercicios
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                Contenido Teórico
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-6">
                {content.theory.map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center pt-8 border-t border-border">
            {content.prevTopic ? (
              <Link to={`/cpp/tema/${content.prevTopic}`}>
                <Button variant="outline" className="group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Tema Anterior
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {content.nextTopic ? (
              <Link to={`/cpp/tema/${content.nextTopic}`}>
                <Button className="group">
                  Siguiente Tema
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicDetail;

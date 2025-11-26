import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gradient">CodeMaster</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#modules" className="text-foreground hover:text-primary transition-colors">
              Módulos
            </a>
            <a href="#success-stories" className="text-foreground hover:text-primary transition-colors">
              Casos de Éxito
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#tutoring" className="text-foreground hover:text-primary transition-colors">
              Tutorías
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Iniciar Sesión</Button>
            <Button className="glow-primary">Comenzar Gratis</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4 animate-fade-in">
            <a href="#modules" className="text-foreground hover:text-primary transition-colors">
              Módulos
            </a>
            <a href="#success-stories" className="text-foreground hover:text-primary transition-colors">
              Casos de Éxito
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#tutoring" className="text-foreground hover:text-primary transition-colors">
              Tutorías
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full">Iniciar Sesión</Button>
              <Button className="w-full glow-primary">Comenzar Gratis</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

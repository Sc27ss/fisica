import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Gauge, Hammer, Calculator, Gamepad2, Lightbulb } from "lucide-react";
import WorkSection from "@/components/WorkSection";
import PowerSection from "@/components/PowerSection";
import EnergySection from "@/components/EnergySection";
import CalculatorSection from "@/components/CalculatorSection";
import GameSection from "@/components/GameSection";
import ExamplesSection from "@/components/ExamplesSection";

type Section = "home" | "work" | "power" | "energy" | "calculator" | "game" | "examples";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("home");

  const sections = [
    { id: "work" as Section, title: "Trabajo", icon: Hammer, color: "accent", description: "Fuerza aplicada sobre una distancia" },
    { id: "power" as Section, title: "Potencia", icon: Gauge, color: "secondary", description: "Rapidez con que se realiza trabajo" },
    { id: "energy" as Section, title: "Energía", icon: Zap, color: "primary", description: "Capacidad de realizar trabajo" },
    { id: "calculator" as Section, title: "Calculadora", icon: Calculator, color: "primary", description: "Resuelve ejercicios paso a paso" },
    { id: "game" as Section, title: "Quiz", icon: Gamepad2, color: "secondary", description: "Pon a prueba tus conocimientos" },
    { id: "examples" as Section, title: "Ejemplos", icon: Lightbulb, color: "accent", description: "Física en el mundo real" },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case "work":
        return <WorkSection onBack={() => setCurrentSection("home")} />;
      case "power":
        return <PowerSection onBack={() => setCurrentSection("home")} />;
      case "energy":
        return <EnergySection onBack={() => setCurrentSection("home")} />;
      case "calculator":
        return <CalculatorSection onBack={() => setCurrentSection("home")} />;
      case "game":
        return <GameSection onBack={() => setCurrentSection("home")} />;
      case "examples":
        return <ExamplesSection onBack={() => setCurrentSection("home")} />;
      default:
        return null;
    }
  };

  if (currentSection !== "home") {
    return <div className="min-h-screen bg-background">{renderSection()}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-3 bg-gradient-hero text-white px-8 py-4 rounded-2xl shadow-glow">
              <Zap className="w-10 h-10 animate-pulse" />
              <h1 className="text-5xl font-bold">Física en Acción</h1>
              <Zap className="w-10 h-10 animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Trabajo, Potencia y Energía
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprende los conceptos fundamentales de la física de manera interactiva, visual y divertida
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const delay = index * 100;
            return (
              <Card
                key={section.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow border-2 overflow-hidden"
                style={{ animationDelay: `${delay}ms` }}
                onClick={() => setCurrentSection(section.id)}
              >
                <div className={`h-2 bg-gradient-${section.color}`} />
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-${section.color} text-white mb-4 group-hover:animate-float`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {section.description}
                  </p>
                  <Button
                    className={`w-full bg-gradient-${section.color} text-white hover:opacity-90`}
                    size="lg"
                  >
                    Explorar
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Info Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-hero text-white p-8 border-0 shadow-glow">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-12 h-12 flex-shrink-0 animate-pulse" />
              <div>
                <h3 className="text-2xl font-bold mb-2">¿Sabías que...?</h3>
                <p className="text-lg opacity-95">
                  La energía no se crea ni se destruye, solo se transforma. 
                  Cuando subes escaleras, tu cuerpo convierte energía química en energía potencial gravitacional.
                  ¡Eso es física en acción! 🚀
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Credits */}
        <footer className="mt-12 text-center pb-8">
          <p className="text-muted-foreground text-base">
            Creado por <span className="font-bold text-xl text-foreground">Santiago Carvajal Moreno</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

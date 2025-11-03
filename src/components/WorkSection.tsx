import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Hammer } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface WorkSectionProps {
  onBack: () => void;
}

const WorkSection = ({ onBack }: WorkSectionProps) => {
  const [force, setForce] = useState([50]);
  const [distance, setDistance] = useState([10]);
  
  const work = force[0] * distance[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-green-50 to-green-100 p-8">
      <div className="max-w-6xl mx-auto">
        <Button onClick={onBack} variant="outline" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-work text-white px-8 py-4 rounded-2xl shadow-glow mb-4">
            <Hammer className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Trabajo (W)</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            El trabajo es la energía transferida cuando una fuerza mueve un objeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Theory Card */}
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-work rounded-full flex items-center justify-center text-white text-sm">1</span>
              Definición
            </h2>
            <p className="text-lg mb-6">
              El <strong>trabajo</strong> se realiza cuando una fuerza aplicada causa un desplazamiento en un objeto.
            </p>
            
            <div className="bg-accent/10 p-6 rounded-xl mb-6">
              <h3 className="font-bold text-lg mb-2">Fórmula:</h3>
              <p className="text-3xl font-mono text-accent mb-2">W = F × d × cos(θ)</p>
              <p className="text-sm text-muted-foreground">
                Para movimiento en línea recta (θ = 0°): <span className="font-bold">W = F × d</span>
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="font-bold text-accent">W:</span>
                <span>Trabajo (Joules, J)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-accent">F:</span>
                <span>Fuerza aplicada (Newtons, N)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-accent">d:</span>
                <span>Distancia recorrida (metros, m)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-accent">θ:</span>
                <span>Ángulo entre fuerza y desplazamiento</span>
              </div>
            </div>
          </Card>

          {/* Interactive Simulator */}
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-work rounded-full flex items-center justify-center text-white text-sm">2</span>
              Simulador Interactivo
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Fuerza: <span className="text-accent">{force[0]} N</span>
                </label>
                <Slider
                  value={force}
                  onValueChange={setForce}
                  min={10}
                  max={200}
                  step={5}
                  className="mb-4"
                />
                <div className="h-4 bg-gradient-work rounded-full" style={{ width: `${(force[0] / 200) * 100}%` }} />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Distancia: <span className="text-accent">{distance[0]} m</span>
                </label>
                <Slider
                  value={distance}
                  onValueChange={setDistance}
                  min={1}
                  max={50}
                  step={1}
                  className="mb-4"
                />
                <div className="h-4 bg-gradient-work rounded-full" style={{ width: `${(distance[0] / 50) * 100}%` }} />
              </div>

              <div className="bg-gradient-work text-white p-8 rounded-xl text-center animate-pulse-glow">
                <p className="text-sm opacity-90 mb-2">Trabajo Total</p>
                <p className="text-5xl font-bold">{work.toLocaleString()}</p>
                <p className="text-xl mt-2">Joules (J)</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm">
                  💡 <strong>Interpretación:</strong> {work < 500 ? "Poco trabajo" : work < 2000 ? "Trabajo moderado" : work < 5000 ? "Bastante trabajo" : "¡Mucho trabajo!"}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Examples */}
        <Card className="mt-8 p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">Ejemplos de la Vida Real</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-accent/5 p-6 rounded-xl border-2 border-accent/20">
              <div className="text-4xl mb-3">🏋️</div>
              <h3 className="font-bold mb-2">Levantar pesas</h3>
              <p className="text-sm text-muted-foreground">
                Si levantas 50 kg (≈490 N) una altura de 2 m, realizas aproximadamente <strong>980 J</strong> de trabajo.
              </p>
            </div>
            <div className="bg-accent/5 p-6 rounded-xl border-2 border-accent/20">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-bold mb-2">Empujar un carro</h3>
              <p className="text-sm text-muted-foreground">
                Empujar un carro con 200 N durante 10 m realiza <strong>2000 J</strong> de trabajo.
              </p>
            </div>
            <div className="bg-accent/5 p-6 rounded-xl border-2 border-accent/20">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold mb-2">Cargar cajas</h3>
              <p className="text-sm text-muted-foreground">
                Levantar una caja de 20 kg (≈196 N) 1.5 m realiza <strong>294 J</strong> de trabajo.
              </p>
            </div>
          </div>
        </Card>

        {/* Footer Credits */}
        <footer className="text-center mt-8 pb-4">
          <p className="text-muted-foreground">
            Creado por <span className="font-bold text-lg text-foreground">Santiago Carvajal Moreno</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WorkSection;

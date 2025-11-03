import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Gauge } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface PowerSectionProps {
  onBack: () => void;
}

const PowerSection = ({ onBack }: PowerSectionProps) => {
  const [work, setWork] = useState([1000]);
  const [time, setTime] = useState([10]);
  
  const power = work[0] / time[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-orange-50 to-yellow-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Button onClick={onBack} variant="outline" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-power text-white px-8 py-4 rounded-2xl shadow-glow mb-4">
            <Gauge className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Potencia (P)</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            La potencia mide qué tan rápido se realiza un trabajo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Theory Card */}
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-power rounded-full flex items-center justify-center text-white text-sm">1</span>
              Definición
            </h2>
            <p className="text-lg mb-6">
              La <strong>potencia</strong> es la rapidez con la que se realiza un trabajo o se transfiere energía.
            </p>
            
            <div className="bg-secondary/10 p-6 rounded-xl mb-6">
              <h3 className="font-bold text-lg mb-2">Fórmula:</h3>
              <p className="text-3xl font-mono text-secondary mb-4">P = W / t</p>
              <p className="text-sm text-muted-foreground mb-2">
                También: <span className="font-bold">P = F × v</span>
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="font-bold text-secondary">P:</span>
                <span>Potencia (Watts, W)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-secondary">W:</span>
                <span>Trabajo realizado (Joules, J)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-secondary">t:</span>
                <span>Tiempo transcurrido (segundos, s)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-secondary">v:</span>
                <span>Velocidad (m/s)</span>
              </div>
            </div>

            <div className="mt-6 bg-muted p-4 rounded-lg">
              <p className="text-sm">
                <strong>Nota:</strong> 1 Watt = 1 Joule por segundo
              </p>
              <p className="text-sm mt-2">
                <strong>Caballos de fuerza (HP):</strong> 1 HP ≈ 746 W
              </p>
            </div>
          </Card>

          {/* Interactive Simulator */}
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-power rounded-full flex items-center justify-center text-white text-sm">2</span>
              Simulador Interactivo
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Trabajo: <span className="text-secondary">{work[0]} J</span>
                </label>
                <Slider
                  value={work}
                  onValueChange={setWork}
                  min={100}
                  max={10000}
                  step={100}
                  className="mb-4"
                />
                <div className="h-4 bg-gradient-power rounded-full" style={{ width: `${(work[0] / 10000) * 100}%` }} />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Tiempo: <span className="text-secondary">{time[0]} s</span>
                </label>
                <Slider
                  value={time}
                  onValueChange={setTime}
                  min={1}
                  max={60}
                  step={1}
                  className="mb-4"
                />
                <div className="h-4 bg-gradient-power rounded-full" style={{ width: `${(time[0] / 60) * 100}%` }} />
              </div>

              <div className="bg-gradient-power text-white p-8 rounded-xl text-center animate-pulse-glow">
                <p className="text-sm opacity-90 mb-2">Potencia</p>
                <p className="text-5xl font-bold">{power.toFixed(2)}</p>
                <p className="text-xl mt-2">Watts (W)</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm">
                  💡 <strong>Equivalente:</strong> {(power / 746).toFixed(2)} HP (Caballos de fuerza)
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparison Chart */}
        <Card className="mt-8 p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">Potencias Comunes</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-secondary/5 p-4 rounded-xl border-2 border-secondary/20 text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-bold mb-1">Bombilla LED</h3>
              <p className="text-2xl text-secondary font-bold">10 W</p>
            </div>
            <div className="bg-secondary/5 p-4 rounded-xl border-2 border-secondary/20 text-center">
              <div className="text-3xl mb-2">🏃</div>
              <h3 className="font-bold mb-1">Corredor</h3>
              <p className="text-2xl text-secondary font-bold">100 W</p>
            </div>
            <div className="bg-secondary/5 p-4 rounded-xl border-2 border-secondary/20 text-center">
              <div className="text-3xl mb-2">🏍️</div>
              <h3 className="font-bold mb-1">Moto</h3>
              <p className="text-2xl text-secondary font-bold">15,000 W</p>
            </div>
            <div className="bg-secondary/5 p-4 rounded-xl border-2 border-secondary/20 text-center">
              <div className="text-3xl mb-2">🚗</div>
              <h3 className="font-bold mb-1">Auto</h3>
              <p className="text-2xl text-secondary font-bold">100,000 W</p>
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

export default PowerSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Zap } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EnergySectionProps {
  onBack: () => void;
}

const EnergySection = ({ onBack }: EnergySectionProps) => {
  const [mass, setMass] = useState([50]);
  const [velocity, setVelocity] = useState([10]);
  const [height, setHeight] = useState([10]);
  
  const g = 9.8; // Gravedad
  const kineticEnergy = 0.5 * mass[0] * velocity[0] ** 2;
  const potentialEnergy = mass[0] * g * height[0];
  const totalEnergy = kineticEnergy + potentialEnergy;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-cyan-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Button onClick={onBack} variant="outline" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-energy text-white px-8 py-4 rounded-2xl shadow-glow mb-4">
            <Zap className="w-10 h-10 animate-pulse" />
            <h1 className="text-4xl font-bold">Energía (E)</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            La capacidad de realizar trabajo o producir cambios
          </p>
        </div>

        <Tabs defaultValue="kinetic" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="kinetic">Energía Cinética</TabsTrigger>
            <TabsTrigger value="potential">Energía Potencial</TabsTrigger>
            <TabsTrigger value="conservation">Conservación</TabsTrigger>
          </TabsList>

          <TabsContent value="kinetic">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-card">
                <h2 className="text-2xl font-bold mb-4">Energía Cinética (Ec)</h2>
                <p className="text-lg mb-6">
                  Es la energía que posee un objeto debido a su <strong>movimiento</strong>.
                </p>
                
                <div className="bg-primary/10 p-6 rounded-xl mb-6">
                  <h3 className="font-bold text-lg mb-2">Fórmula:</h3>
                  <p className="text-3xl font-mono text-primary mb-2">Ec = ½ m v²</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-primary">Ec:</span>
                    <span>Energía cinética (Joules, J)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-primary">m:</span>
                    <span>Masa (kilogramos, kg)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-primary">v:</span>
                    <span>Velocidad (metros/segundo, m/s)</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-card">
                <h2 className="text-2xl font-bold mb-6">Calculadora Cinética</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Masa: <span className="text-primary">{mass[0]} kg</span>
                    </label>
                    <Slider
                      value={mass}
                      onValueChange={setMass}
                      min={10}
                      max={200}
                      step={5}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Velocidad: <span className="text-primary">{velocity[0]} m/s</span>
                    </label>
                    <Slider
                      value={velocity}
                      onValueChange={setVelocity}
                      min={1}
                      max={30}
                      step={1}
                    />
                  </div>

                  <div className="bg-gradient-energy text-white p-8 rounded-xl text-center animate-pulse-glow">
                    <p className="text-sm opacity-90 mb-2">Energía Cinética</p>
                    <p className="text-5xl font-bold">{kineticEnergy.toLocaleString()}</p>
                    <p className="text-xl mt-2">Joules (J)</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="potential">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-card">
                <h2 className="text-2xl font-bold mb-4">Energía Potencial Gravitacional (Ep)</h2>
                <p className="text-lg mb-6">
                  Es la energía almacenada debido a la <strong>posición</strong> de un objeto respecto al suelo.
                </p>
                
                <div className="bg-primary/10 p-6 rounded-xl mb-6">
                  <h3 className="font-bold text-lg mb-2">Fórmula:</h3>
                  <p className="text-3xl font-mono text-primary mb-2">Ep = m g h</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-primary">Ep:</span>
                    <span>Energía potencial (Joules, J)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-primary">m:</span>
                    <span>Masa (kilogramos, kg)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-primary">g:</span>
                    <span>Gravedad (9.8 m/s²)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-primary">h:</span>
                    <span>Altura (metros, m)</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-card">
                <h2 className="text-2xl font-bold mb-6">Calculadora Potencial</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Masa: <span className="text-primary">{mass[0]} kg</span>
                    </label>
                    <Slider
                      value={mass}
                      onValueChange={setMass}
                      min={10}
                      max={200}
                      step={5}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Altura: <span className="text-primary">{height[0]} m</span>
                    </label>
                    <Slider
                      value={height}
                      onValueChange={setHeight}
                      min={1}
                      max={50}
                      step={1}
                    />
                  </div>

                  <div className="bg-gradient-energy text-white p-8 rounded-xl text-center animate-pulse-glow">
                    <p className="text-sm opacity-90 mb-2">Energía Potencial</p>
                    <p className="text-5xl font-bold">{potentialEnergy.toLocaleString()}</p>
                    <p className="text-xl mt-2">Joules (J)</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="conservation">
            <Card className="p-8 shadow-card">
              <h2 className="text-2xl font-bold mb-6 text-center">⚡ Ley de Conservación de la Energía ⚡</h2>
              <p className="text-lg text-center mb-8">
                La energía total de un sistema aislado permanece constante. 
                <strong className="text-primary"> La energía no se crea ni se destruye, solo se transforma.</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary/10 p-6 rounded-xl text-center border-2 border-primary/30">
                  <h3 className="font-bold text-lg mb-2">Energía Cinética</h3>
                  <p className="text-3xl font-bold text-primary">{kineticEnergy.toFixed(0)} J</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl text-center border-2 border-primary/30">
                  <h3 className="font-bold text-lg mb-2">Energía Potencial</h3>
                  <p className="text-3xl font-bold text-primary">{potentialEnergy.toFixed(0)} J</p>
                </div>
                <div className="bg-gradient-energy text-white p-6 rounded-xl text-center border-2 border-primary shadow-glow">
                  <h3 className="font-bold text-lg mb-2">Energía Total</h3>
                  <p className="text-3xl font-bold">{totalEnergy.toFixed(0)} J</p>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4">🎢 Ejemplo: Montaña Rusa</h3>
                <p className="mb-4">
                  En el punto más alto, la montaña rusa tiene máxima energía potencial y mínima cinética.
                  Al descender, la energía potencial se convierte en cinética. ¡La suma siempre es constante!
                </p>
                <div className="flex items-center justify-between">
                  <span>⬆️ Arriba: Ep máxima</span>
                  <span>➡️ Transformación</span>
                  <span>⬇️ Abajo: Ec máxima</span>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

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

export default EnergySection;

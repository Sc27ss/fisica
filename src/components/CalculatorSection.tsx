import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calculator } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CalculatorSectionProps {
  onBack: () => void;
}

type CalculationType = "work" | "power" | "kinetic" | "potential";

const CalculatorSection = ({ onBack }: CalculatorSectionProps) => {
  const [calculationType, setCalculationType] = useState<CalculationType>("work");
  const [result, setResult] = useState<number | null>(null);
  const [steps, setSteps] = useState<string[]>([]);

  // Work inputs
  const [force, setForce] = useState("");
  const [distance, setDistance] = useState("");

  // Power inputs
  const [work, setWork] = useState("");
  const [time, setTime] = useState("");

  // Kinetic energy inputs
  const [massKinetic, setMassKinetic] = useState("");
  const [velocity, setVelocity] = useState("");

  // Potential energy inputs
  const [massPotential, setMassPotential] = useState("");
  const [height, setHeight] = useState("");

  const calculate = () => {
    let calcSteps: string[] = [];
    let calcResult = 0;

    switch (calculationType) {
      case "work":
        const f = parseFloat(force);
        const d = parseFloat(distance);
        if (!isNaN(f) && !isNaN(d)) {
          calcSteps = [
            "Fórmula: W = F × d",
            `Datos: F = ${f} N, d = ${d} m`,
            `Sustituyendo: W = ${f} × ${d}`,
            `Resultado: W = ${f * d} J`
          ];
          calcResult = f * d;
        }
        break;

      case "power":
        const w = parseFloat(work);
        const t = parseFloat(time);
        if (!isNaN(w) && !isNaN(t)) {
          calcSteps = [
            "Fórmula: P = W / t",
            `Datos: W = ${w} J, t = ${t} s`,
            `Sustituyendo: P = ${w} / ${t}`,
            `Resultado: P = ${(w / t).toFixed(2)} W`
          ];
          calcResult = w / t;
        }
        break;

      case "kinetic":
        const mk = parseFloat(massKinetic);
        const v = parseFloat(velocity);
        if (!isNaN(mk) && !isNaN(v)) {
          calcSteps = [
            "Fórmula: Ec = ½ m v²",
            `Datos: m = ${mk} kg, v = ${v} m/s`,
            `Primero calculamos v²: ${v}² = ${v * v}`,
            `Sustituyendo: Ec = ½ × ${mk} × ${v * v}`,
            `Ec = ${mk / 2} × ${v * v}`,
            `Resultado: Ec = ${0.5 * mk * v * v} J`
          ];
          calcResult = 0.5 * mk * v * v;
        }
        break;

      case "potential":
        const mp = parseFloat(massPotential);
        const h = parseFloat(height);
        const g = 9.8;
        if (!isNaN(mp) && !isNaN(h)) {
          calcSteps = [
            "Fórmula: Ep = m g h",
            `Datos: m = ${mp} kg, g = 9.8 m/s², h = ${h} m`,
            `Sustituyendo: Ep = ${mp} × 9.8 × ${h}`,
            `Ep = ${mp * g} × ${h}`,
            `Resultado: Ep = ${mp * g * h} J`
          ];
          calcResult = mp * g * h;
        }
        break;
    }

    setSteps(calcSteps);
    setResult(calcResult);
  };

  const renderInputs = () => {
    switch (calculationType) {
      case "work":
        return (
          <>
            <div>
              <Label htmlFor="force">Fuerza (N)</Label>
              <Input
                id="force"
                type="number"
                placeholder="Ej: 50"
                value={force}
                onChange={(e) => setForce(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="distance">Distancia (m)</Label>
              <Input
                id="distance"
                type="number"
                placeholder="Ej: 10"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
          </>
        );

      case "power":
        return (
          <>
            <div>
              <Label htmlFor="work">Trabajo (J)</Label>
              <Input
                id="work"
                type="number"
                placeholder="Ej: 1000"
                value={work}
                onChange={(e) => setWork(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="time">Tiempo (s)</Label>
              <Input
                id="time"
                type="number"
                placeholder="Ej: 10"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </>
        );

      case "kinetic":
        return (
          <>
            <div>
              <Label htmlFor="massKinetic">Masa (kg)</Label>
              <Input
                id="massKinetic"
                type="number"
                placeholder="Ej: 50"
                value={massKinetic}
                onChange={(e) => setMassKinetic(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="velocity">Velocidad (m/s)</Label>
              <Input
                id="velocity"
                type="number"
                placeholder="Ej: 10"
                value={velocity}
                onChange={(e) => setVelocity(e.target.value)}
              />
            </div>
          </>
        );

      case "potential":
        return (
          <>
            <div>
              <Label htmlFor="massPotential">Masa (kg)</Label>
              <Input
                id="massPotential"
                type="number"
                placeholder="Ej: 50"
                value={massPotential}
                onChange={(e) => setMassPotential(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="height">Altura (m)</Label>
              <Input
                id="height"
                type="number"
                placeholder="Ej: 10"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Button onClick={onBack} variant="outline" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-energy text-white px-8 py-4 rounded-2xl shadow-glow mb-4">
            <Calculator className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Calculadora de Física</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Resuelve ejercicios paso a paso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-6">Datos del Problema</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="calculation-type">Tipo de Cálculo</Label>
                <Select value={calculationType} onValueChange={(value) => setCalculationType(value as CalculationType)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="work">Trabajo (W = F × d)</SelectItem>
                    <SelectItem value="power">Potencia (P = W / t)</SelectItem>
                    <SelectItem value="kinetic">Energía Cinética (Ec = ½mv²)</SelectItem>
                    <SelectItem value="potential">Energía Potencial (Ep = mgh)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {renderInputs()}
            </div>

            <Button onClick={calculate} className="w-full bg-gradient-energy text-white" size="lg">
              <Calculator className="w-4 h-4 mr-2" />
              Calcular
            </Button>
          </Card>

          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-6">Solución Paso a Paso</h2>
            
            {steps.length > 0 ? (
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <p className="text-sm">{step}</p>
                    </div>
                  </div>
                ))}

                {result !== null && (
                  <div className="bg-gradient-energy text-white p-6 rounded-xl text-center animate-pulse-glow mt-6">
                    <p className="text-sm opacity-90 mb-2">Respuesta Final</p>
                    <p className="text-4xl font-bold">{result.toFixed(2)}</p>
                    <p className="text-lg mt-2">
                      {calculationType === "work" && "Joules (J)"}
                      {calculationType === "power" && "Watts (W)"}
                      {calculationType === "kinetic" && "Joules (J)"}
                      {calculationType === "potential" && "Joules (J)"}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-12">
                <Calculator className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p>Ingresa los datos y presiona "Calcular"</p>
                <p className="text-sm mt-2">Verás la solución paso a paso aquí</p>
              </div>
            )}
          </Card>
        </div>

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

export default CalculatorSection;

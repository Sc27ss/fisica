import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Lightbulb } from "lucide-react";

interface ExamplesSectionProps {
  onBack: () => void;
}

const ExamplesSection = ({ onBack }: ExamplesSectionProps) => {
  const examples = [
    {
      emoji: "🚗",
      title: "Autos Eléctricos",
      category: "Energía",
      description: "Los autos eléctricos convierten energía eléctrica almacenada en las baterías en energía cinética para moverse.",
      physics: "La eficiencia de conversión es ~80-90%, mucho mayor que los motores de combustión (~20-30%).",
      color: "primary"
    },
    {
      emoji: "☀️",
      title: "Paneles Solares",
      category: "Energía → Eléctrica",
      description: "Transforman energía solar (radiación) en energía eléctrica mediante el efecto fotovoltaico.",
      physics: "Un panel típico de 300W genera ~1.5 kWh al día. Potencia = Energía/tiempo.",
      color: "secondary"
    },
    {
      emoji: "🏋️",
      title: "Levantamiento de Pesas",
      category: "Trabajo y Potencia",
      description: "Cuando levantas 100 kg a 2 metros de altura, realizas trabajo contra la gravedad.",
      physics: "Trabajo = 100kg × 9.8m/s² × 2m ≈ 1960 J. Si lo haces en 2 segundos, tu potencia es ~980W.",
      color: "accent"
    },
    {
      emoji: "🎢",
      title: "Montaña Rusa",
      category: "Conservación de Energía",
      description: "En el punto más alto tiene máxima Ep, al bajar se convierte en Ec. La energía total se conserva.",
      physics: "Si sube 50m: Ep = mgh. Al descender, toda esa Ep se convierte en Ec = ½mv².",
      color: "primary"
    },
    {
      emoji: "⚡",
      title: "Rayo",
      category: "Potencia Extrema",
      description: "Un rayo típico libera alrededor de 1000 millones de Joules en menos de un segundo.",
      physics: "Potencia instantánea: ~1 billón de Watts (1 TW). Suficiente para alimentar una ciudad por un instante.",
      color: "secondary"
    },
    {
      emoji: "🚀",
      title: "Cohetes Espaciales",
      category: "Trabajo y Energía",
      description: "Los cohetes convierten energía química del combustible en trabajo para vencer la gravedad.",
      physics: "El Saturno V consumía ~15,000 kg de combustible/seg, generando 190 millones de Newtons de fuerza.",
      color: "accent"
    },
    {
      emoji: "💡",
      title: "Bombilla LED vs Incandescente",
      category: "Eficiencia Energética",
      description: "Una LED de 10W produce la misma luz que una incandescente de 60W.",
      physics: "Ambas transforman energía eléctrica en luz, pero la LED es 6x más eficiente. Menor pérdida de calor.",
      color: "primary"
    },
    {
      emoji: "🏃",
      title: "Corredor de 100 metros",
      category: "Potencia Humana",
      description: "Un velocista como Usain Bolt genera aproximadamente 2000-2500 W de potencia máxima.",
      physics: "A velocidad promedio 10 m/s con fuerza ~900N: P = F×v = 900N × 10m/s = 9000W pico.",
      color: "secondary"
    },
    {
      emoji: "🌊",
      title: "Presas Hidroeléctricas",
      category: "Energía Potencial → Eléctrica",
      description: "El agua acumulada tiene energía potencial que se convierte en cinética al caer, moviendo turbinas.",
      physics: "Itaipú genera 14,000 MW. La caída de agua de 120m transforma Ep = mgh en electricidad.",
      color: "accent"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        <Button onClick={onBack} variant="outline" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-hero text-white px-8 py-4 rounded-2xl shadow-glow mb-4">
            <Lightbulb className="w-10 h-10 animate-pulse" />
            <h1 className="text-4xl font-bold">Física en el Mundo Real</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Descubre cómo trabajo, potencia y energía están en todas partes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{example.emoji}</div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-${example.color}/10 text-${example.color}`}>
                  {example.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-center">{example.title}</h3>
              
              <p className="text-sm text-muted-foreground mb-4">{example.description}</p>
              
              <div className={`bg-${example.color}/5 p-4 rounded-lg border-l-4 border-${example.color}`}>
                <p className="text-xs">
                  <strong className="text-foreground">🔬 Física:</strong> {example.physics}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-gradient-hero text-white border-0 shadow-glow">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-12 h-12 flex-shrink-0 animate-pulse" />
            <div>
              <h3 className="text-2xl font-bold mb-3">¿Por qué es importante entender estos conceptos?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">🎓 En tu futuro académico:</h4>
                  <ul className="text-sm space-y-1 opacity-95">
                    <li>• Ingeniería (mecánica, civil, eléctrica)</li>
                    <li>• Medicina (biomecánica, deportiva)</li>
                    <li>• Arquitectura (estructuras, materiales)</li>
                    <li>• Ciencias (física, química, biología)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">💼 En tu futuro profesional:</h4>
                  <ul className="text-sm space-y-1 opacity-95">
                    <li>• Diseño de vehículos y máquinas</li>
                    <li>• Energías renovables y sostenibilidad</li>
                    <li>• Deportes de alto rendimiento</li>
                    <li>• Desarrollo de tecnologías</li>
                  </ul>
                </div>
              </div>
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

export default ExamplesSection;

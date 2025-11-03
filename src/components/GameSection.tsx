import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Gamepad2, Trophy } from "lucide-react";
import { toast } from "sonner";

interface GameSectionProps {
  onBack: () => void;
}

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "¿Cuál es la condición necesaria y suficiente en física para que se considere que se ha realizado trabajo sobre un objeto?",
    options: [
      "Aplicar una fuerza muy grande",
      "Aplicar una fuerza que cause una transformación de energía",
      "Aplicar una fuerza que provoque un desplazamiento en la dirección de la fuerza o componente de esta",
      "Sentir fatiga al intentar mover un objeto pesado, sin importar el resultado"
    ],
    correct: 2,
    explanation: "El trabajo requiere que haya una fuerza aplicada que cause un desplazamiento en su dirección: W = F × d × cos(θ)"
  },
  {
    question: "Si un estudiante aplica una fuerza de 500 N para empujar una pared y no logra moverla, ¿cuánto trabajo físico realiza?",
    options: [
      "500 Joules",
      "Un valor indeterminado sin conocer la distancia",
      "0 Joules",
      "500 Newtons × Tiempo"
    ],
    correct: 2,
    explanation: "Sin desplazamiento (d = 0), no hay trabajo realizado: W = F × d = 500 N × 0 m = 0 J"
  },
  {
    question: "La Potencia en física se define esencialmente como:",
    options: [
      "La cantidad total de energía consumida",
      "El factor cos(θ) en la fórmula del trabajo",
      "El trabajo realizado dividido por el tiempo transcurrido",
      "La capacidad de mover un objeto pesado a cualquier velocidad"
    ],
    correct: 2,
    explanation: "La potencia mide qué tan rápido se realiza un trabajo: P = W/t"
  },
  {
    question: "¿Cuál es la ley importante de la física que establece que 'La energía no se crea ni se destruye, solo se transforma'?",
    options: [
      "Ley de la Inercia",
      "Ley de la Conservación de la Energía",
      "Ley de la Acción y Reacción",
      "Ley de la Gravitación Universal"
    ],
    correct: 1,
    explanation: "La Ley de Conservación de la Energía establece que la energía total de un sistema aislado permanece constante"
  },
  {
    question: "Si la velocidad de un objeto se duplica, ¿qué le sucede a su Energía Cinética?",
    options: [
      "Se duplica",
      "Se triplica",
      "Permanece igual",
      "Se cuadriplica"
    ],
    correct: 3,
    explanation: "La energía cinética depende del cuadrado de la velocidad: Ec = ½mv². Si v → 2v, entonces Ec → 4Ec"
  },
  {
    question: "¿Cuál es la unidad del Sistema Internacional que se utiliza tanto para medir la Energía como para medir el Trabajo?",
    options: [
      "Newton (N)",
      "Watt (W)",
      "Joule (J)",
      "Metro (m)"
    ],
    correct: 2,
    explanation: "El Joule (J) es la unidad estándar para energía y trabajo: 1 J = 1 N × 1 m"
  },
  {
    question: "Si la fuerza aplicada a un objeto es perpendicular al desplazamiento (θ = 90°), ¿cuál es el trabajo realizado?",
    options: [
      "Es el máximo trabajo posible",
      "Es igual a F × d",
      "Es cero (cos(90°) = 0)",
      "Es igual a F × d / 2"
    ],
    correct: 2,
    explanation: "Cuando la fuerza es perpendicular al movimiento: W = F × d × cos(90°) = F × d × 0 = 0"
  },
  {
    question: "¿Cuál de los siguientes tipos de energía representa la energía almacenada dentro de los enlaces moleculares de una sustancia, como la comida o la gasolina?",
    options: [
      "Energía Térmica",
      "Energía Eléctrica",
      "Energía Mecánica",
      "Energía Química"
    ],
    correct: 3,
    explanation: "La energía química está almacenada en los enlaces moleculares y se libera en reacciones químicas"
  },
  {
    question: "Un objeto de 4 kg se mueve a una velocidad constante de 10 m/s. ¿Cuál es su Energía Cinética?",
    options: [
      "40 J",
      "200 J",
      "100 J",
      "400 J"
    ],
    correct: 1,
    explanation: "Ec = ½mv² = ½(4 kg)(10 m/s)² = ½(4)(100) = 200 J"
  },
  {
    question: "Si un auto tiene una potencia de 100,000 W, ¿cuántos Joules de trabajo puede realizar en 5 segundos?",
    options: [
      "5,000 J",
      "20,000 J",
      "500,000 J",
      "100,005 J"
    ],
    correct: 2,
    explanation: "W = P × t = 100,000 W × 5 s = 500,000 J"
  },
  {
    question: "Dos personas, A y B, empujan la misma caja 10 metros aplicando la misma fuerza de 120 N. La persona A tarda 5 segundos y la persona B tarda 10 segundos. ¿Cuál es la diferencia de potencia desarrollada entre A y B?",
    options: [
      "0 W",
      "120 W",
      "240 W",
      "480 W"
    ],
    correct: 1,
    explanation: "W = 120 N × 10 m = 1200 J. PA = 1200/5 = 240 W. PB = 1200/10 = 120 W. Diferencia: 240 - 120 = 120 W"
  },
  {
    question: "¿Qué acción física requiere principalmente una transformación de energía eléctrica para funcionar?",
    options: [
      "Levantar una caja (Trabajo/Mecánica)",
      "Cargar un celular (Eléctrica)",
      "Comer (Química)",
      "Correr una carrera (Química/Cinética)"
    ],
    correct: 1,
    explanation: "Cargar un celular convierte energía eléctrica en energía química almacenada en la batería"
  },
  {
    question: "¿Qué mide la unidad de Caballos de Fuerza (HP)?",
    options: [
      "Fuerza aplicada en la dirección del movimiento",
      "El trabajo realizado en un periodo de un minuto",
      "La Potencia desarrollada, equivalente a ≈ 746 W",
      "La energía potencial gravitatoria en una caída"
    ],
    correct: 2,
    explanation: "1 HP (Horse Power o Caballo de Fuerza) = 746 Watts aproximadamente"
  },
  {
    question: "Si un motor realiza 2,000 Joules de trabajo para mover un objeto, y lo hace en un tiempo de 5 segundos, ¿cuál es la Potencia del motor?",
    options: [
      "10,000 W",
      "1,000 W",
      "400 W",
      "500 W"
    ],
    correct: 2,
    explanation: "P = W/t = 2,000 J / 5 s = 400 W"
  },
  {
    question: "Un atleta realiza 4,000 J de trabajo total en 20 segundos. Si hubiera realizado ese mismo trabajo en 10 segundos, ¿por qué factor se habría incrementado su potencia?",
    options: [
      "Se habría incrementado en un 50%",
      "Se habría incrementado en 4,000 W",
      "Se habría duplicado",
      "Se habría reducido a la mitad"
    ],
    correct: 2,
    explanation: "P1 = 4000/20 = 200 W. P2 = 4000/10 = 400 W. La potencia se duplica"
  },
  {
    question: "Un estudiante empuja una caja 10 metros con una fuerza constante de 50 N en la misma dirección del movimiento. ¿Cuál es el trabajo realizado?",
    options: [
      "5 J",
      "500 J",
      "50 J",
      "100 J"
    ],
    correct: 1,
    explanation: "W = F × d = 50 N × 10 m = 500 J"
  },
  {
    question: "¿Qué trabajo se realiza al levantar una caja de 20 kg a una altura de 1.5 m? (Considerar g ≈ 9.8 m/s²)",
    options: [
      "30 J",
      "196 J",
      "294 J",
      "13.3 J"
    ],
    correct: 2,
    explanation: "W = F × d = (m × g) × h = (20 kg × 9.8 m/s²) × 1.5 m = 196 N × 1.5 m = 294 J"
  },
  {
    question: "Un motor realiza un trabajo de 15,000 J en un lapso de 30 s. ¿Cuál es la potencia desarrollada por el motor en Watts?",
    options: [
      "450,000 W",
      "500 W",
      "15,030 W",
      "0.002 W"
    ],
    correct: 1,
    explanation: "P = W/t = 15,000 J / 30 s = 500 W"
  },
  {
    question: "Si una fuerza de 20 N empuja un carro una distancia de 5 m en la misma dirección de la fuerza, ¿cuánto trabajo se realiza?",
    options: [
      "4 J",
      "10 J",
      "100 J",
      "200 J"
    ],
    correct: 2,
    explanation: "W = F × d = 20 N × 5 m = 100 J"
  },
  {
    question: "¿Qué indica que una persona o máquina tiene una mayor potencia en el contexto del trabajo físico?",
    options: [
      "Que puede realizar más trabajo en total",
      "Que aplica una fuerza con un ángulo de 0°",
      "Que realiza el mismo trabajo en menos tiempo",
      "Que consume una mayor cantidad de energía potencial"
    ],
    correct: 2,
    explanation: "Mayor potencia significa realizar el mismo trabajo en menos tiempo: P = W/t"
  }
];

const GameSection = ({ onBack }: GameSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setShowExplanation(true);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
      toast.success("¡Correcto! 🎉", {
        description: questions[currentQuestion].explanation
      });
    } else {
      toast.error("Incorrecto 😢", {
        description: questions[currentQuestion].explanation
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setGameFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setGameFinished(false);
  };

  if (gameFinished) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-yellow-50 to-orange-50 p-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 text-center shadow-card">
            <Trophy className="w-24 h-24 mx-auto mb-6 text-secondary animate-float" />
            <h1 className="text-4xl font-bold mb-4">¡Quiz Completado!</h1>
            <div className="bg-gradient-power text-white p-8 rounded-xl mb-8">
              <p className="text-6xl font-bold mb-2">{score}/{questions.length}</p>
              <p className="text-xl">Respuestas Correctas</p>
              <p className="text-3xl font-bold mt-4">{percentage.toFixed(0)}%</p>
            </div>
            <p className="text-xl mb-6">
              {percentage >= 90 && "¡Excelente! Dominas el tema 🌟"}
              {percentage >= 70 && percentage < 90 && "¡Muy bien! Buen conocimiento 👍"}
              {percentage >= 50 && percentage < 70 && "Bien, pero puedes mejorar 📚"}
              {percentage < 50 && "Sigue practicando 💪"}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={resetGame} size="lg" className="bg-gradient-power text-white">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Jugar de Nuevo
              </Button>
              <Button onClick={onBack} variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-yellow-50 to-orange-50 p-8">
      <div className="max-w-3xl mx-auto">
        <Button onClick={onBack} variant="outline" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-power text-white px-8 py-4 rounded-2xl shadow-glow mb-4">
            <Gamepad2 className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Quiz de Física</h1>
          </div>
        </div>

        <Card className="p-8 shadow-card mb-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-semibold text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-semibold bg-gradient-power text-white px-4 py-2 rounded-full">
              Puntos: {score}
            </span>
          </div>

          <div className="h-2 bg-muted rounded-full mb-8">
            <div
              className="h-full bg-gradient-power rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>

          <h2 className="text-2xl font-bold mb-8 text-center break-words">{question.question}</h2>

          <div className="grid gap-4 mb-8">
            {question.options.map((option, index) => {
              let buttonClass = "h-auto py-4 px-6 text-left justify-start text-lg break-words whitespace-normal";
              
              if (selectedAnswer !== null) {
                if (index === question.correct) {
                  buttonClass += " bg-accent text-white border-accent";
                } else if (index === selectedAnswer) {
                  buttonClass += " bg-destructive text-white border-destructive";
                }
              }

              return (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  variant="outline"
                  className={buttonClass}
                >
                  <span className="font-bold mr-3 flex-shrink-0">{String.fromCharCode(65 + index)}.</span>
                  <span className="flex-1">{option}</span>
                </Button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="bg-muted p-6 rounded-xl mb-6 animate-slide-up">
              <h3 className="font-bold mb-2">💡 Explicación:</h3>
              <p>{question.explanation}</p>
            </div>
          )}

          {selectedAnswer !== null && (
            <Button onClick={nextQuestion} className="w-full bg-gradient-power text-white" size="lg">
              {currentQuestion < questions.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
            </Button>
          )}
        </Card>

        {/* Footer Credits */}
        <footer className="text-center mt-8">
          <p className="text-muted-foreground">
            Creado por <span className="font-bold text-lg text-foreground">Santiago Carvajal Moreno</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default GameSection;

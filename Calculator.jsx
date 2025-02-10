import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState("+");

  const calculateResult = () => {
    switch (operation) {
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷": return b !== 0 ? a / b : "Error";
      default: return 0;
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Calculadora</h2>
      <div className="flex flex-col space-y-2">
        <input 
          type="number" 
          value={a} 
          onChange={(e) => setA(Number(e.target.value))} 
          className="border p-2 rounded" 
          placeholder="Valor A" 
        />
        <input 
          type="number" 
          value={b} 
          onChange={(e) => setB(Number(e.target.value))} 
          className="border p-2 rounded" 
          placeholder="Valor B" 
        />
      </div>
      <div className="flex space-x-2">
        {["+", "-", "×", "÷"].map(op => (
          <button 
            key={op} 
            onClick={() => setOperation(op)}
            className={`px-4 py-2 rounded ${operation === op ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {op}
          </button>
        ))}
      </div>
      <div className="text-center p-2 bg-gray-100 rounded">
        Resultado: <span className="font-bold">{calculateResult()}</span>
      </div>
    </div>
  );
}

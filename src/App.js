import { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // State de presupuesto y restante
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);

  // State para mostrar el form de pregunta
  const [mostrarpregunta, actualizarPregunta] = useState(true);

  // State para los gastos
  const [gastos, guardarGastos] = useState([]);

  // State para el gasto
  const [gasto, guardarGasto] = useState({});

  // State para cuando creamos un gasto
  const [crearGasto, guardarCrearGasto] = useState(false);

  // Agrega un nuevo gasto
  useEffect(() => {
    if (crearGasto) {
      if (restante < 1) {
        alert("Se ha acabado el presupuesto");
        return;
      }
      guardarGastos([...gastos, gasto]);
      guardarCrearGasto(false);
      // Resta del restante la cantidad del gasto
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
    }
  }, [gasto, crearGasto, restante, gastos]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  restante={restante}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

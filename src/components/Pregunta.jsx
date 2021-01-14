import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);

  //   State de error
  const [error, guardarError] = useState(false);

  // Lee el presupuesto del input
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    // Si se pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <form onSubmit={agregarPresupuesto}>
        <h2>Coloca tu Presupuesto</h2>
        {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu Presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="u-full-width button-primary"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;

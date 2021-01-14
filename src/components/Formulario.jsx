import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Error from "./Error";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  // State para nombre y cantidad
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);

  // State de error
  const [error, guardarError] = useState(false);

  //   Agregar gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    // Construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    guardarGasto(gasto);
    guardarCrearGasto(true);

    // Resetear form
    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus Gatos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={isNaN(cantidad) ? "" : cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        value="Agregar Gasto"
        className="button-primary u-full-width"
      />
    </form>
  );
};

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;

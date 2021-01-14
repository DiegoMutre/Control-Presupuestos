import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { revisarRestante } from "../helpers";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: {presupuesto} </div>
      <div className={revisarRestante(presupuesto, restante)}>
        Restante: {restante}
      </div>
    </Fragment>
  );
};

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;

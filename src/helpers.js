export const revisarRestante = (presupuesto, restante) => {
  let clase;

  // Calcular 25%
  if (presupuesto / 4 > restante) {
    clase = "alert alert-danger";
    // Calcular 50%
  } else if (presupuesto / 2 > restante) {
    clase = "alert alert-warning";
  } else {
    clase = "alert alert-success";
  }

  return clase;
};

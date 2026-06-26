const imagen = "/factorial.png";

function Factorial() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Descomposición Factorial</h1>

      <p>
        En esta sección se presentan algunos de los métodos más utilizados para
        factorizar polinomios. La siguiente imagen resume las técnicas
        principales y muestra ejemplos de aplicación.
      </p>

      <img
        src={imagen}
        alt="Descomposición Factorial"
        className="img-fluid rounded mb-4"
      />

      <hr />

      <h3>Actividad</h3>

      <p>
        Observa la imagen e identifica los siguientes métodos de factorización:
      </p>

      <ul>
        <li>Factor común.</li>
        <li>Diferencia de cuadrados.</li>
        <li>Trinomio cuadrado perfecto.</li>
      </ul>

      <p>
        Luego analiza los ejemplos y verifica cómo se obtiene el resultado en
        cada caso.
      </p>
    </div>
  );
}

export default Factorial;

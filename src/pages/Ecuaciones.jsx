const primer = "/primer-grado.png";
const segundo = "/segundo-grado.png";
const tercero = "/tercer-grado.png";

function Ecuaciones() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Ecuaciones</h1>

      <p>
        Una ecuación es una igualdad matemática que contiene una o más
        incógnitas. El objetivo es encontrar el valor de la variable.
      </p>

      <hr />

      <h3>Ecuaciones de Primer Grado</h3>

      <p>Son ecuaciones donde la incógnita está elevada a la potencia 1.</p>

      <img src={primer} alt="Primer grado" className="img-fluid rounded mb-4" />

      <hr />

      <h3>Ecuaciones de Segundo Grado</h3>

      <p>Son ecuaciones donde la incógnita está elevada al cuadrado.</p>

      <img
        src={segundo}
        alt="Segundo grado"
        className="img-fluid rounded mb-4"
      />

      <hr />

      <h3>Ecuaciones de Tercer Grado</h3>

      <p>Son ecuaciones donde la incógnita está elevada al cubo.</p>

      <img
        src={tercero}
        alt="Tercer grado"
        className="img-fluid rounded mb-4"
      />

      <hr />

      <h3>Ejemplo de Ruffini</h3>

      <p>
        <strong>Ejercicio:</strong>
      </p>

      <p>x³ - 6x² + 11x - 6 = 0</p>

      <p>Probamos con x = 1. Como el resultado es 0, aplicamos Ruffini.</p>

      <p>
        Las soluciones son:
        <strong> x = 1, x = 2 y x = 3.</strong>
      </p>

      <hr />

      <h3>Ejemplo de Raíces Evidentes</h3>

      <p>
        <strong>Ejercicio:</strong>
      </p>

      <p>x² - 9 = 0</p>

      <p>Se factoriza así:</p>

      <p>(x - 3)(x + 3) = 0</p>

      <p>
        Las soluciones son:
        <strong> x = 3 y x = -3.</strong>
      </p>
    </div>
  );
}

export default Ecuaciones;

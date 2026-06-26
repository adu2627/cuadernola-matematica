const imagen = "/racionales.png";

function Racionales() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Ecuaciones Racionales</h1>

      <p>
        Una ecuación racional es aquella que contiene una o más fracciones
        algebraicas con la incógnita en el denominador.
      </p>

      <img
        src={imagen}
        alt="Ecuaciones Racionales"
        className="img-fluid rounded mb-4"
      />

      <hr />

      <h3>Ejemplo 1</h3>

      <p>
        <strong>Resolver:</strong>
      </p>

      <p>1/x = 2</p>

      <p>Multiplicamos ambos lados por x.</p>

      <p>1 = 2x</p>

      <p>x = 1/2</p>

      <hr />

      <h3>Ejemplo 2</h3>

      <p>
        <strong>Resolver:</strong>
      </p>

      <p>3/x = 1</p>

      <p>Multiplicamos ambos lados por x.</p>

      <p>3 = x</p>

      <p>
        <strong>Respuesta:</strong> x = 3
      </p>
    </div>
  );
}

export default Racionales;

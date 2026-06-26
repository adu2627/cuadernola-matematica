const imagen = "/inecuaciones.png";

function Inecuaciones() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Inecuaciones</h1>

      <p>
        Una inecuación es una desigualdad matemática que utiliza los signos
        &lt;, &gt;, ≤ o ≥.
      </p>

      <img src={imagen} alt="Inecuaciones" className="img-fluid rounded mb-4" />

      <hr />

      <h3>Ejemplo 1</h3>

      <p>
        <strong>Resolver:</strong>
      </p>

      <p>x + 3 &gt; 8</p>

      <p>Restamos 3 en ambos lados.</p>

      <p>x &gt; 5</p>

      <hr />

      <h3>Ejemplo 2</h3>

      <p>
        <strong>Resolver:</strong>
      </p>

      <p>2x ≤ 10</p>

      <p>Dividimos ambos lados entre 2.</p>

      <p>x ≤ 5</p>
    </div>
  );
}

export default Inecuaciones;

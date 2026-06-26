const imagen = "/geogebra.png";

function GeoGebra() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">GeoGebra</h1>

      <p>
        GeoGebra es una aplicación gratuita que permite resolver y visualizar
        ejercicios de matemática de forma interactiva. Es muy utilizada para
        trabajar con funciones, geometría, álgebra y gráficos.
      </p>

      <img src={imagen} alt="GeoGebra" className="img-fluid rounded mb-4" />

      <hr />

      <h3>Ejercicio 1</h3>

      <p>
        <strong>Graficar la función:</strong>
      </p>

      <p>y = x²</p>

      <p>
        Escribimos la función en la barra de entrada y GeoGebra dibuja
        automáticamente la parábola.
      </p>

      <ul>
        <li>Vértice: (0,0)</li>
        <li>Abre hacia arriba.</li>
        <li>Es simétrica respecto al eje Y.</li>
      </ul>

      <hr />

      <h3>Ejercicio 2</h3>

      <p>
        <strong>Graficar la recta:</strong>
      </p>

      <p>y = 2x + 1</p>

      <p>
        GeoGebra representa la recta y permite observar su pendiente y los
        puntos donde corta los ejes.
      </p>

      <ul>
        <li>Pendiente: 2.</li>
        <li>Corta el eje Y en (0,1).</li>
      </ul>

      <hr />

      <h3>Conclusión</h3>

      <p>
        GeoGebra facilita la comprensión de los conceptos matemáticos mediante
        gráficos interactivos, permitiendo comprobar resultados de forma rápida
        y visual.
      </p>
    </div>
  );
}

export default GeoGebra;

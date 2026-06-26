const ejercicio1 = "/estadistica1.png";
const ejercicio2 = "/estadistica2.png";
const ejercicio3 = "/estadistica3.png";
const ejercicio4 = "/estadistica4.png";

function Estadistica() {
  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#F5F0FF",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <h1
        className="text-center mb-4"
        style={{
          color: "#6D28D9",
          fontWeight: "bold",
        }}
      >
        📊 Estadística
      </h1>

      <div
        className="card shadow mb-4"
        style={{ borderRadius: "20px", border: "none" }}
      >
        <div className="card-body">
          <h3>📖 ¿Qué es la Estadística?</h3>

          <p>
            La estadística es la rama de las matemáticas que permite recopilar,
            organizar, analizar e interpretar datos para obtener información y
            facilitar la toma de decisiones.
          </p>

          <p>
            En este tema se trabajó con las medidas de tendencia central:
            <strong> media, mediana y moda.</strong>
          </p>
        </div>
      </div>

      <div
        className="card shadow mb-4"
        style={{ borderRadius: "20px", border: "none" }}
      >
        <div className="card-body">
          <h3>📌 Conceptos Básicos</h3>

          <p>
            <strong>Media:</strong> Es el promedio de los datos.
          </p>

          <p>
            <strong>Mediana:</strong> Es el valor central de un conjunto
            ordenado.
          </p>

          <p>
            <strong>Moda:</strong> Es el dato que más se repite.
          </p>
        </div>
      </div>

      <div
        className="card shadow mb-4"
        style={{ borderRadius: "20px", border: "none" }}
      >
        <div className="card-body">
          <h3>📝 Ejercicio 1</h3>

          <img
            src={ejercicio1}
            alt="Ejercicio 1"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div
        className="card shadow mb-4"
        style={{ borderRadius: "20px", border: "none" }}
      >
        <div className="card-body">
          <h3>📝 Ejercicio 2</h3>

          <img
            src={ejercicio2}
            alt="Ejercicio 2"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div
        className="card shadow mb-4"
        style={{ borderRadius: "20px", border: "none" }}
      >
        <div className="card-body">
          <h3>📝 Ejercicio 3</h3>

          <img
            src={ejercicio3}
            alt="Ejercicio 3"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div
        className="card shadow mb-4"
        style={{ borderRadius: "20px", border: "none" }}
      >
        <div className="card-body">
          <h3>📝 Ejercicio 4</h3>

          <img
            src={ejercicio4}
            alt="Ejercicio 4"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div
        className="card shadow"
        style={{ borderRadius: "20px", border: "none" }}
      >
        <div className="card-body">
          <h3>💡 Conclusión</h3>

          <p>
            Durante este tema aprendí a calcular la media, la mediana y la moda,
            además de interpretar la información obtenida a partir de diferentes
            conjuntos de datos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Estadistica;

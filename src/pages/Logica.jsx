function Logica() {
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
        📘 Lógica
      </h1>

      <div
        className="card shadow mb-4"
        style={{
          borderRadius: "20px",
          border: "none",
        }}
      >
        <div className="card-body">
          <h3>🧠 La importancia de la lógica</h3>

          <p>
            La lógica es una herramienta fundamental para resolver problemas,
            analizar situaciones y tomar decisiones de manera ordenada. En
            Matemática nos permite interpretar correctamente la información y
            encontrar soluciones mediante el razonamiento.
          </p>

          <img
            src="/repecho.png"
            alt="Problema del repecho"
            className="img-fluid rounded my-3"
          />

          <p>
            A continuación se presenta un ejercicio trabajado en clase donde se
            aplica el razonamiento lógico para calcular la longitud de un
            repecho utilizando el tiempo empleado en subirlo y bajarlo.
          </p>
        </div>
      </div>

      <div
        className="card shadow"
        style={{
          borderRadius: "20px",
          border: "none",
        }}
      >
        <div className="card-body">
          <h3>📝 Resolución del ejercicio</h3>

          <hr />

          <p>
            Sea <strong>x</strong> la longitud del repecho.
          </p>

          <p>
            Ernesto sube 5 metros cada 8 segundos, por lo que el tiempo de
            subida es:
          </p>

          <p>
            <strong>8x / 5</strong>
          </p>

          <p>
            Ernesto baja 4 metros cada 3 segundos, por lo que el tiempo de
            bajada es:
          </p>

          <p>
            <strong>3x / 4</strong>
          </p>

          <p>El tiempo total es de 141 segundos:</p>

          <p>
            <strong>8x/5 + 3x/4 = 141</strong>
          </p>

          <p>Multiplicamos toda la ecuación por 20:</p>

          <p>
            <strong>32x + 15x = 2820</strong>
          </p>

          <p>
            <strong>47x = 2820</strong>
          </p>

          <p>
            <strong>x = 60</strong>
          </p>

          <div
            className="mt-4 p-3"
            style={{
              backgroundColor: "#EDE9FE",
              borderRadius: "10px",
            }}
          >
            <h5>✅ Respuesta Final</h5>

            <p className="mb-0">
              La longitud del repecho es de <strong>60 metros</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logica;

function Home() {
  return (
    <div
      className="container mt-5"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5F0FF",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <div className="text-center mb-5">
        <h1
          style={{
            color: "#6D28D9",
            fontWeight: "bold",
            fontSize: "2.7rem",
          }}
        >
          📚 Cuadernola Virtual de Matemática
        </h1>

        <p
          className="lead"
          style={{
            color: "#555",
            fontSize: "1.2rem",
          }}
        >
          Proyecto de Matemática y Desarrollo Web
        </p>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#666",
          }}
        >
          Este cuaderno virtual presenta los principales temas trabajados
          durante el curso de Matemática. Incluye definiciones, ejercicios
          realizados en clase, ejemplos resueltos y recursos que facilitan la
          comprensión de cada contenido.
        </p>
      </div>

      <div
        className="card shadow mb-4"
        style={{
          borderRadius: "20px",
          border: "none",
        }}
      >
        <div className="card-body text-center">
          <h2
            style={{
              color: "#6D28D9",
              fontWeight: "bold",
            }}
          >
            ℹ️ Información General
          </h2>

          <p className="mt-4">
            <strong>👩‍🎓 Estudiante:</strong> Ada Novas
          </p>

          <p>
            <strong>👨‍🏫 Docentes:</strong>
          </p>

          <p>Made</p>
          <p>Nacho</p>
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
          <h2
            className="text-center mb-4"
            style={{
              color: "#6D28D9",
              fontWeight: "bold",
            }}
          >
            📖 Temas Desarrollados
          </h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4>📘 Lógica</h4>
                  <p>
                    Definiciones, razonamiento lógico y resolución de problemas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4>📊 Estadística</h4>
                  <p>Media, mediana, moda e interpretación de datos.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4>📐 Ecuaciones</h4>
                  <p>
                    Ecuaciones de primer, segundo y tercer grado, método de
                    Ruffini y raíces evidentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4>🧮 Descomposición Factorial</h4>
                  <p>Métodos de factorización y resolución de ejercicios.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4>📈 GeoGebra</h4>
                  <p>
                    Representación gráfica de funciones y resolución de
                    ejercicios.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4>➗ Ecuaciones Racionales</h4>
                  <p>Resolución de ecuaciones con expresiones racionales.</p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4>⚖️ Inecuaciones</h4>
                  <p>Resolución e interpretación de inecuaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center mt-5"
        style={{
          color: "#777",
        }}
      >
        <p>
          📚 Proyecto realizado para el curso de Matemática y Desarrollo Web.
        </p>
      </div>
    </div>
  );
}

export default Home;

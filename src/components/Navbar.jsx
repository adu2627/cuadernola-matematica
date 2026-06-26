import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#A78BFA",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
        >
          📚 Cuadernola Virtual de Matemática
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/" style={{ color: "white" }}>
            🏠 Inicio
          </Link>

          <Link className="nav-link" to="/logica" style={{ color: "white" }}>
            📘 Lógica
          </Link>

          <Link
            className="nav-link"
            to="/estadistica"
            style={{ color: "white" }}
          >
            📊 Estadística
          </Link>

          <Link
            className="nav-link"
            to="/ecuaciones"
            style={{ color: "white" }}
          >
            📐 Ecuaciones
          </Link>

          <Link
            className="nav-link"
            to="/descomposicion-factorial"
            style={{ color: "white" }}
          >
            🧮 Factorial
          </Link>

          <Link className="nav-link" to="/geogebra" style={{ color: "white" }}>
            📈 GeoGebra
          </Link>

          <Link
            className="nav-link"
            to="/ecuaciones-racionales"
            style={{ color: "white" }}
          >
            ➗ Racionales
          </Link>

          <Link
            className="nav-link"
            to="/inecuaciones"
            style={{ color: "white" }}
          >
            ⚖️ Inecuaciones
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

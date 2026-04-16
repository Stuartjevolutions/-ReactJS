import { useNavigate } from "react-router-dom";

// Pantalla principal del sistema
function Home() {

  const navigate = useNavigate();

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "#111",
      color: "white"
    }}>
      
      {/* Título principal */}
      <h1>Cyber Store</h1>

      {/* Botón para ir al catálogo */}
      <button onClick={() => navigate("/catalog")}>
        Ir al catálogo
      </button>

    </div>
  );
}

export default Home;
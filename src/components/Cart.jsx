import { useNavigate } from "react-router-dom";

// Componente que muestra el carrito de compras
function Cart({ cart }) {

  const navigate = useNavigate();

  // Calcular total de la compra
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{
      borderTop: "2px solid black",
      marginTop: "20px",
      padding: "10px"
    }}>
      <h3>Carrito</h3>

      {/* Mostrar cantidad de productos */}
      <p>Productos: {cart.length}</p>

      {/* Mostrar total */}
      <p>Total: ${total}</p>

      {/* Botón para ir a pagar */}
      <button onClick={() => navigate("/checkout")}>
        Pagar
      </button>

    </div>
  );
}

export default Cart;
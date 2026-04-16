// Componente que representa un producto individual
function ProductCard({ product, addToCart }) {

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      textAlign: "center"
    }}>
      
      {/* Imagen del producto */}
      <img src={product.image} alt={product.name} />

      {/* Nombre del producto */}
      <h4>{product.name}</h4>

      {/* Precio del producto */}
      <p>${product.price}</p>

      {/* Botón para agregar al carrito */}
      <button onClick={() => addToCart(product)}>
        Agregar
      </button>

    </div>
  );
}

export default ProductCard;
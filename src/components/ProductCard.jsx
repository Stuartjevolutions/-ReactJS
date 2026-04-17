function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h4>{product.name}</h4>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Agregar
      </button>
    </div>
  );
}

export default ProductCard;
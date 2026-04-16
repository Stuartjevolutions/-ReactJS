import products from "../data/products";
import ProductCard from "./ProductCard";

// Componente que muestra la lista de productos
function ProductList({ category, addToCart }) {

  // Filtrar productos según la categoría seleccionada
  const filtered =
    category === "todos"
      ? products
      : products.filter(p => p.category === category);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>

      {/* Recorrer productos y mostrar cada uno */}
      {filtered.map(product => (
        <ProductCard
          key={product.id} // clave única
          product={product}
          addToCart={addToCart}
        />
      ))}

    </div>
  );
}

export default ProductList;
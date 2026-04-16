import { useState } from "react";
import Categories from "./Categories";
import ProductList from "./ProductList";
import Cart from "./Cart";

// Componente principal del catálogo
function Catalog() {

  // Estado para categoría seleccionada
  const [category, setCategory] = useState("todos");

  // Estado para el carrito
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>

      {/* Contenedor principal dividido */}
      <div style={{ display: "flex" }}>

        {/* IZQUIERDA: productos */}
        <div style={{ width: "70%" }}>
          <ProductList
            category={category}
            addToCart={addToCart}
          />
        </div>

        {/* DERECHA: categorías */}
        <div style={{ width: "30%" }}>
          <Categories setCategory={setCategory} />
        </div>

      </div>

      {/* PARTE INFERIOR: carrito */}
      <Cart cart={cart} />

    </div>
  );
}

export default Catalog;
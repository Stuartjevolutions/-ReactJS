import { useState } from "react";
import Categories from "./Categories";
import ProductList from "./ProductList";
import Cart from "./Cart";

// Componente principal del catálogo
function Catalog() {
  const [category, setCategory] = useState("todos");
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="catalog">

      <div className="catalog-content">

        {/* IZQUIERDA: categorías */}
        <div className="categories">
          <Categories setCategory={setCategory} />
        </div>

        {/* DERECHA: productos */}
        <div className="products">
          <ProductList
            category={category}
            addToCart={addToCart}
          />
        </div>

      </div>

      {/* ABAJO: carrito */}
      <div className="cart">
        <Cart cart={cart} />
      </div>

    </div>
  );
}

export default Catalog;
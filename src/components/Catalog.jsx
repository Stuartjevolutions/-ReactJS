import { useState } from "react";
import Categories from "./Categories";
import ProductList from "./ProductList";
import Cart from "./Cart";

function Catalog() {
  const [category, setCategory] = useState("todos");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="catalog">

      <div className="catalog-content">

        <div className="products">
          <ProductList
            category={category}
            addToCart={addToCart}
          />
        </div>

        <div className="categories">
          <Categories setCategory={setCategory} />
        </div>

      </div>

      <div className="cart">
        <Cart cart={cart} />
      </div>

    </div>
  );
}

export default Catalog;
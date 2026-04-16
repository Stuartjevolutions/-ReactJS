// Componente que permite seleccionar categorías
function Categories({ setCategory }) {

  return (
    <div>
      <h3>Categorías</h3>

      {/* Botón para mostrar todos los productos */}
      <button onClick={() => setCategory("todos")}>
        Todos
      </button>

      {/* Botón para filtrar laptops */}
      <button onClick={() => setCategory("laptops")}>
        Laptops
      </button>

      {/* Botón para filtrar accesorios */}
      <button onClick={() => setCategory("accesorios")}>
        Accesorios
      </button>

    </div>
  );
}

export default Categories;
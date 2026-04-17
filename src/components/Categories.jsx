// Componente que permite seleccionar categorías
function Categories({ setCategory }) {
  return (
    <div>
      <h3>Categorías</h3>

      {/* Mostrar todos */}
      <button onClick={() => setCategory("todos")}>
        Todos
      </button>

      <button onClick={() => setCategory("celulares")}>
        Celulares
      </button>

      <button onClick={() => setCategory("drones")}>
        Drones
      </button>

      <button onClick={() => setCategory("laptops")}>
        Laptops
      </button>

      <button onClick={() => setCategory("accesorios")}>
        Accesorios
      </button>

      <button onClick={() => setCategory("pcgamer")}>
        PC Gamer
      </button>

    </div>
  );
}

export default Categories;

const categorias = [
  { id: 1, name: "all" },
  { id: 2, name: "sativa" },
  { id: 3, name: "indica" },
  { id: 4, name: "hybrid" }
]


function CategoryFilter({ category, setCategory}) {
    return (
        <section>
            <h2>Explore strains</h2>
            <div className="category-filters">
            {categorias.map((cat) => (
            <button key={cat.id}
              onClick={() => setCategory(cat.name)}
              className={category === cat.name ? "active" : ""}
            >
              {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
            </button>
          ))}
            </div>
        </section>
    )
}

export default CategoryFilter;
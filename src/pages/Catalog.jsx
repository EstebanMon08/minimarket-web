import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Filters from "../components/Filters";
import { useCart } from "../context/CartContext";

function Catalog({ onGoToCheckout }) {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [tag, setTag] = useState("Todos");
  const [sort, setSort] = useState("");

  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => category === "Todas" || p.category === category)
    .filter((p) => tag === "Todos" || p.tag === tag)
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Full House</h1>
      <Filters
        search={search} setSearch={setSearch}
        category={category} setCategory={setCategory}
        tag={tag} setTag={setTag}
        sort={sort} setSort={setSort}
      />
      <div style={styles.layout}>
        <div style={styles.grid}>
          {filtered.length === 0
            ? <p style={styles.noResults}>No se encontraron productos.</p>
            : filtered.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))
          }
        </div>
        <div style={styles.sidebar}>
         <Cart />
        <button style={styles.checkoutBtn} onClick={onGoToCheckout}>
         Ir a checkout
         </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {padding: "24px", background: "#0a0a0a", minHeight: "100vh" },
  title: {textAlign: "center", fontSize: "26px", marginBottom: "20px", color: "#44ff44", fontFamily: "Arial Black, sans-serif", letterSpacing: "2px" },
  layout: {display: "flex", gap: "20px", maxWidth: "1400px", margin: "0 auto", alignItems: "flex-start" },
  grid: {display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px", flex: 1 },
  sidebar: {width: "300px", flexShrink: 0, position: "sticky", top: "24px" },
  noResults: {color: "#666", fontSize: "14px" },
  checkoutBtn: {marginTop: "10px", width: "100%", padding: "11px", background: "#44ff44", color: "#000", border: "none", borderRadius: "4px", fontWeight: "700", cursor: "pointer", fontSize: "14px" },
};

export default Catalog;
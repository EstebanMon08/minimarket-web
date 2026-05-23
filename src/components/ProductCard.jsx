function ProductCard({ product, onAddToCart }) {
  const tagColors = {
    nuevo: { background: "#dbeafe", color: "#1d4ed8" },
    oferta: { background: "#fef9c3", color: "#a16207" },
    popular: { background: "#dcfce7", color: "#15803d" },
  };

  return (
    <div style={styles.card}>
      {product.tag && (
        <span style={{ ...styles.tag, ...tagColors[product.tag] }}>
          {product.tag.toUpperCase()}
        </span>
      )}
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.body}>
        <span style={styles.category}>{product.category}</span>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.description}>{product.description}</p>
        <div style={styles.footer}>
          <span style={styles.price}>Q{product.price}</span>
          <span style={styles.stock}>Stock: {product.stock}</span>
        </div>
        <button
          style={styles.button}
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: { background: "#1a1a1a", borderRadius: "6px", border: "1px solid #2a2a2a", overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" },
  tag: { position: "absolute", top: "8px", left: "8px", fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "3px" },
  image: { width: "100%", height: "180px", objectFit: "cover" },
  body: { padding: "12px", display: "flex", flexDirection: "column", gap: "5px", flex: 1 },
  category: { fontSize: "11px", color: "#44ff44", textTransform: "uppercase", fontWeight: "600" },
  name: { margin: 0, fontSize: "14px", fontWeight: "700", color: "#e0e0e0" },
  description: { margin: 0, fontSize: "12px", color: "#888", flex: 1 },
  footer: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" },
  price: { fontSize: "18px", fontWeight: "800", color: "#44ff44" },
  stock: { fontSize: "11px", color: "#555" },
  button: { marginTop: "8px", padding: "9px", background: "#44ff44", color: "#000", border: "none", borderRadius: "4px", fontWeight: "700", cursor: "pointer", fontSize: "13px" },
};

export default ProductCard;
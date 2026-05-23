import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div style={styles.empty}>
        <p style={styles.emptyText}>Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Carrito</h2>
      <div style={styles.items}>
        {cart.map((item) => (
          <div key={item.id} style={styles.item}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <div style={styles.info}>
              <p style={styles.name}>{item.name}</p>
              <p style={styles.subtotal}>Q{(item.price * item.quantity).toFixed(2)}</p>
              <div style={styles.controls}>
                <button style={styles.btn} onClick={() => decreaseQuantity(item.id)}>−</button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button style={styles.btn} onClick={() => increaseQuantity(item.id)}>+</button>
                <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>X</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.footer}>
        <div style={styles.totalRow}>
          <span style={styles.totalLabel}>Total:</span>
          <span style={styles.totalAmount}>Q{total.toFixed(2)}</span>
        </div>
        <button style={styles.clearBtn} onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  );
}

const styles = {
  container: { background: "#1a1a1a", borderRadius: "2px", border: "1px solid #2a2a2a", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" },
  title: { margin: 0, fontSize: "16px", fontWeight: "700", color: "#44ff44" },
  items: { display: "flex", flexDirection: "column", gap: "12px" },
  item: { display: "flex", gap: "12px", paddingBottom: "12px", borderBottom: "1px solid #f3f4f6" },
  image: { width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" },
  info: { flex: 1, display: "flex", flexDirection: "column", gap: "4px" },
  name: { margin: 0, fontSize: "13px", fontWeight: "600", color: "#ffffff" },
  subtotal: { margin: 0, fontSize: "13px", fontWeight: "700", color: "#44ff44" },
  controls: { display: "flex", alignItems: "center", gap: "8px" },
  btn: { width: "28px", height: "28px", border: "1px solid #e5e7eb", background: "#f9fafb", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "700" },
  quantity: { fontSize: "14px", fontWeight: "600", minWidth: "20px", textAlign: "center" },
  removeBtn: { background: "none", border: "none", cursor: "pointer", fontSize: "16px", marginLeft: "4px" },
  footer: { display: "flex", flexDirection: "column", gap: "10px" },
  totalRow: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  totalLabel: { fontSize: "16px", fontWeight: "600", color: "#ffffff" },
  totalAmount: { fontSize: "22px", fontWeight: "800", color: "#ffffff" },
  clearBtn: { padding: "10px", background: "#fee2e2", color: "#dc2626", border: "none", borderRadius: "8px", fontWeight: "600", cursor: "pointer", fontSize: "14px" },
  emptyIcon: { fontSize: "40px" },
  empty: { background: "#1a1a1a", borderRadius: "6px", border: "1px solid #2a2a2a", padding: "30px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
  emptyText: { margin: 0, color: "#888", fontSize: "13px" },
};

export default Cart;
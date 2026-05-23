import { useState } from "react";
import { useCart } from "../context/CartContext";


function Checkout({ onBack, onSuccess }) {
  const { cart, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "", payment: "tarjeta" });
  const [errors, setErrors] = useState({});


  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es requerido";
    if (!form.email.trim()) newErrors.email = "El correo es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Correo inválido";
    if (!form.address.trim()) newErrors.address = "La dirección es requerida";
    if (cart.length === 0) newErrors.cart = "Tu carrito está vacío";
    return newErrors;
  }

  function handleSubmit() {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    clearCart();
    onSuccess(form);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <button style={styles.backBtn} onClick={onBack}>← Volver al catálogo</button>
        <h2 style={styles.title}>Finalizar compra</h2>

        {errors.cart && <p style={styles.errorBox}>{errors.cart}</p>}

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Resumen del pedido</h3>
          {cart.map((item) => (
            <div key={item.id} style={styles.orderItem}>
              <span>{item.name} x{item.quantity}</span>
              <span>Q{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div style={styles.orderTotal}>
            <span>Total</span>
            <span>Q{total.toFixed(2)}</span>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Datos de envío</h3>

          <label style={styles.label}>Nombre completo</label>
          <input
            style={{ ...styles.input, ...(errors.name ? styles.inputError : {}) }}
            name="name" value={form.name} onChange={handleChange}
            placeholder="Juan Pérez"
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <label style={styles.label}>Correo electrónico</label>
          <input
            style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
            name="email" value={form.email} onChange={handleChange}
            placeholder="juan@email.com"
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <label style={styles.label}>Dirección de entrega</label>
          <input
            style={{ ...styles.input, ...(errors.address ? styles.inputError : {}) }}
            name="address" value={form.address} onChange={handleChange}
            placeholder="Zona 10, Guatemala"
          />
          {errors.address && <p style={styles.error}>{errors.address}</p>}

          <label style={styles.label}>Método de pago</label>
          <div style={styles.paymentOptions}>
            {["tarjeta", "transferencia", "contra entrega"].map((method) => (
              <label key={method} style={{ ...styles.paymentOption, ...(form.payment === method ? styles.paymentSelected : {}) }}>
                <input
                  type="radio" name="payment" value={method}
                  checked={form.payment === method} onChange={handleChange}
                  style={{ display: "none" }}
                />
                {method === "tarjeta" ? "Tarjeta" : method === "transferencia" ? "Transferencia" : "Contra entrega"}
              </label>
            ))}
          </div>
        </div>

        <button style={styles.submitBtn} onClick={handleSubmit}>
          Confirmar compra
        </button>
      </div>
    </div>
  );
}



const styles = {
  wrapper: { padding: "24px", background: "#0a0a0a", minHeight: "100vh" },
  container: { maxWidth: "580px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" },
  backBtn: { background: "none", border: "none", cursor: "pointer", fontSize: "13px", color: "#666", padding: 0, textAlign: "left" },
  title: { margin: 0, fontSize: "22px", fontWeight: "700", color: "#44ff44" },
  section: { background: "#1a1a1a", borderRadius: "6px", border: "1px solid #2a2a2a", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" },
  sectionTitle: { margin: "0 0 6px", fontSize: "14px", fontWeight: "700", color: "#e0e0e0" },
  orderItem: { display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#aaa" },
  orderTotal: { display: "flex", justifyContent: "space-between", fontSize: "15px", fontWeight: "700", color: "#44ff44", borderTop: "1px solid #2a2a2a", paddingTop: "8px", marginTop: "4px" },
  label: { fontSize: "12px", fontWeight: "600", color: "#aaa" },
  input: { padding: "9px 12px", borderRadius: "4px", border: "1px solid #333", fontSize: "13px", outline: "none", width: "100%", boxSizing: "border-box", background: "#111", color: "#e0e0e0" },
  inputError: { borderColor: "#ff4444" },
  error: { margin: 0, fontSize: "11px", color: "#ff4444" },
  errorBox: { background: "#2a0000", color: "#ff4444", padding: "10px 12px", borderRadius: "4px", fontSize: "13px", margin: 0 },
  paymentOptions: { display: "flex", gap: "8px", flexWrap: "wrap" },
  paymentOption: { padding: "8px 14px", borderRadius: "4px", border: "1px solid #333", cursor: "pointer", fontSize: "13px", fontWeight: "500", background: "#111", color: "#e0e0e0" },
  paymentSelected: { border: "1px solid #44ff44", color: "#44ff44" },
  submitBtn: { padding: "12px", background: "#44ff44", color: "#000", border: "none", borderRadius: "4px", fontWeight: "700", cursor: "pointer", fontSize: "15px" },
};
export default Checkout;
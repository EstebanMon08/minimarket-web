function OrderSuccess({ form, onBackToStore }) {
  return (
  <div style={styles.wrapper}>
    <div style={styles.container}>
      <h2 style={styles.title}>Compra confirmada</h2>
      <p style={styles.subtitle}>Gracias por tu pedido, {form.name}.</p>
      <div style={styles.details}>
        <div style={styles.row}><span style={styles.key}>Correo</span><span>{form.email}</span></div>
        <div style={styles.row}><span style={styles.key}>Direccion</span><span>{form.address}</span></div>
        <div style={styles.row}><span style={styles.key}>Metodo de pago</span><span style={styles.capitalize}>{form.payment}</span></div>
      </div>
      <button style={styles.btn} onClick={onBackToStore}>Volver a la tienda</button>
    </div>
  </div>
  );
}

const styles = {
  wrapper: { padding: "24px", background: "#0a0a0a", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" },
  container: { background: "#1a1a1a", borderRadius: "6px", border: "1px solid #2a2a2a", padding: "36px", maxWidth: "460px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", textAlign: "center" },
  icon: { fontSize: "48px" },
  title: { margin: 0, fontSize: "22px", fontWeight: "700", color: "#44ff44" },
  subtitle: { margin: 0, fontSize: "14px", color: "#aaa" },
  details: { width: "100%", display: "flex", flexDirection: "column", gap: "8px", background: "#111", borderRadius: "4px", padding: "14px" },
  row: { display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#aaa" },
  key: { fontWeight: "600", color: "#e0e0e0" },
  capitalize: { textTransform: "capitalize" },
  btn: { padding: "10px 22px", background: "#44ff44", color: "#000", border: "none", borderRadius: "4px", fontWeight: "700", cursor: "pointer", fontSize: "14px" },
};

export default OrderSuccess;
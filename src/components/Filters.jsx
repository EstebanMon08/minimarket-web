function Filters({ search, setSearch, category, setCategory, tag, setTag, sort, setSort }) {
  const categories = ["Todas", "Laptops", "Monitores", "Perifericos", "Audio", "Tablets", "Telefonos"];
  const tags = ["Todos", "nuevo", "oferta", "popular"];
  const sorts = [
    { value: "asc", label: "Precio: menor a mayor" },
    { value: "desc", label: "Precio: mayor a menor" },
  ];

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        placeholder="Buscar producto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select style={styles.select} value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <select style={styles.select} value={tag} onChange={(e) => setTag(e.target.value)}>
        {tags.map((t) => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
      </select>
      <select style={styles.select} value={sort} onChange={(e) => setSort(e.target.value)}>
        {sorts.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
      </select>
    </div>
  );
}

const styles = {
  container: { display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px", maxWidth: "1400px", margin: "0 auto 24px" },
  input: { flex: 1, minWidth: "200px", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "14px", outline: "none" },
  select: { padding: "10px 14px", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "14px", background: "#fff", cursor: "pointer", outline: "none" },
};

export default Filters;
import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const products = {
  electronics: [
    { id: 1, name: "Smartphone", price: 15000 },
    { id: 2, name: "Headphones", price: 2000 },
  ],
  clothing: [
    { id: 3, name: "T-Shirt", price: 799 },
    { id: 4, name: "Jeans", price: 1499 },
  ],
  books: [
    { id: 5, name: "React Guide", price: 599 },
    { id: 6, name: "JavaScript Basics", price: 399 },
  ],
};

function Category({ items, title }) {
  return (
    <>
      <h2>{title}</h2>
      <div style={styles.grid}>
        {items.map((p) => (
          <div key={p.id} style={styles.card}>
            <div style={styles.icon}>📦</div>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function ProductBrowse() {
  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <Link to="/electronics">Electronics</Link>
        <Link to="/clothing">Clothing</Link>
        <Link to="/books">Books</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/electronics"
          element={<Category title="📱 Electronics" items={products.electronics} />}
        />
        <Route
          path="/clothing"
          element={<Category title="👕 Clothing" items={products.clothing} />}
        />
        <Route
          path="/books"
          element={<Category title="📚 Books" items={products.books} />}
        />
        <Route
          path="/"
          element={<p>Select a category to view products.</p>}
        />
      </Routes>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  nav: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    background: "#fff",
  },
  icon: {
    fontSize: "40px",
  },
};

export default ProductBrowse;

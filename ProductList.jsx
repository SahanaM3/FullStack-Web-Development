import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Wireless Headphones", price: 1999 },
  { id: 2, name: "Smart Watch", price: 2999 },
  { id: 3, name: "Bluetooth Speaker", price: 1499 },
  { id: 4, name: "USB-C Charger", price: 799 },
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2>🛍️ Simple E-Commerce Store</h2>
        <div style={styles.cart}>
          🛒 Cart: <strong>{cart.length}</strong>
        </div>
      </div>

      {/* Product Grid */}
      <div style={styles.grid}>
        {productsData.map((product) => (
          <div key={product.id} style={styles.card}>
            <div style={styles.image}>📦</div>
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
              disabled={cart.some((item) => item.id === product.id)}
            >
              {cart.some((item) => item.id === product.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div style={styles.cartBox}>
          <h3>🧾 Cart Summary</h3>
          {cart.map((item) => (
            <p key={item.id}>
              {item.name} - ₹{item.price}
            </p>
          ))}
          <hr />
          <strong>
            Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
          </strong>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  cart: {
    fontSize: "18px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  image: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  button: {
    padding: "8px 15px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  cartBox: {
    marginTop: "30px",
    padding: "20px",
    background: "#f8f9fa",
    borderRadius: "8px",
  },
};

export default ProductList;

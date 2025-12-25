import React, { useState } from "react";

const NotificationDashboard = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, message }]);

    // Auto remove after 4 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 4000);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const getColor = (type) => {
    switch (type) {
      case "success":
        return "#4CAF50";
      case "error":
        return "#F44336";
      case "warning":
        return "#FF9800";
      default:
        return "#2196F3";
    }
  };

  return (
    <div style={styles.dashboard}>
      <h2>📊 Dashboard Notification System</h2>

      <div style={styles.buttons}>
        <button onClick={() => addNotification("success", "Data saved successfully!")}>
          Success
        </button>
        <button onClick={() => addNotification("warning", "Storage almost full!")}>
          Warning
        </button>
        <button onClick={() => addNotification("error", "Server connection failed!")}>
          Error
        </button>
      </div>

      <div style={styles.notificationContainer}>
        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              ...styles.notification,
              backgroundColor: getColor(n.type),
            }}
          >
            <span>{n.message}</span>
            <button
              style={styles.closeBtn}
              onClick={() => removeNotification(n.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    padding: "20px",
    fontFamily: "Arial",
  },
  buttons: {
    marginBottom: "20px",
  },
  notificationContainer: {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "300px",
  },
  notification: {
    color: "#fff",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default NotificationDashboard;

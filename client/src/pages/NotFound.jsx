import React from "react";

const NotFound = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      textAlign: "center",
      color: "#333",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "6rem",
      margin: "0",
      color: "#ff6b6b",
    },
    message: {
      fontSize: "1.5rem",
      margin: "10px 0",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <a
        href="/"
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;

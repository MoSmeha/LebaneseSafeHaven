const NotFound = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f2f5",
      fontFamily: "Arial, sans-serif",
    },
    errorWrapper: {
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "40px",
      maxWidth: "500px",
      width: "90%",
      textAlign: "center",
    },
    errorCode: {
      fontSize: "120px",
      color: "#e74c3c",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    errorMessage: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "20px",
    },

    homeLink: {
      display: "inline-block",
      backgroundColor: "#3498db",
      color: "white",
      textDecoration: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    homeLinkHover: {
      ":hover": {
        backgroundColor: "#2980b9",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.errorWrapper}>
        <div style={styles.errorCode}>404</div>
        <div style={styles.errorMessage}>Page Not Found</div>

        <a
          href="/"
          style={styles.homeLink}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;

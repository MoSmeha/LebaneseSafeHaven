import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBarHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // bero7 3al apartments ma3 l search term
    navigate("/apartments", { state: { initialSearch: searchTerm } });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const styles = {
    container: {
      width: "100%",
      maxWidth: "550px",
    },
    form: {
      position: "relative",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "8px 100px 8px 40px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ff3138",
      outline: "none",
      transition: "all 0.2s ease",
    },
    iconWrapper: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "#94a3b8",
    },
    button: {
      position: "absolute",
      right: "0",
      top: "0",
      bottom: "0",
      padding: "0 20px",
      backgroundColor: "#ff3138",
      color: "white",
      border: "none",
      borderRadius: "0 8px 8px 0",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.2s ease",
    },
  };

  const addFocusStyles = (e) => {
    e.target.style.boxShadow = "0 0 0 2px #D81C22";
    e.target.style.borderColor = "#D81C22";
  };

  const removeFocusStyles = (e) => {
    e.target.style.boxShadow = "none";
    e.target.style.borderColor = "#D81C22";
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
          style={styles.input}
          onFocus={addFocusStyles}
          onBlur={removeFocusStyles}
        />
        <div style={styles.iconWrapper}>
          <Search size={20} />
        </div>
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBarHome;

import { useState } from "react";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="搜索商品..."
            value={searchValue}
            onChange={handleSearch}
            style={styles.input}
          />
        </div>
      </div>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    backgroundColor: "#4a90d9",
    padding: "12px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
  brand: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  },
  searchBox: {
    flex: 1,
    maxWidth: "500px",
  },
  input: {
    width: "100%",
    padding: "8px 16px",
    border: "none",
    borderRadius: "20px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  },
};

 interface CardProps {
  image: string;
  name: string;
  price: number;
}

export default function Card({ image, name, price }: CardProps) {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={image} alt={name} style={styles.image} />
      </div>
      <div style={styles.content}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.description}>正版授权,速来抢购</p>
        <p style={styles.price}>¥{price.toFixed(2)}</p>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
  imageContainer: {
    width: "100%",
    aspectRatio: "1 / 1",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    padding: "12px",
  },
  name: {
    margin: "0 0 8px 0",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  description: {
    margin: "0 0 8px 0",
    fontSize: "12px",
    color: "#999",
  },
  price: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#e74c3c",
  },
};

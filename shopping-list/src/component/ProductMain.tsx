interface ProductMainProps {
  name: string;
  price: number;
  originalPrice?: number;
}

export default function ProductMain({
  name,
  price,
  originalPrice,
}: ProductMainProps) {
  return (
    <div style={styles.main}>
      {/* 商品名称 */}
      <h1 style={styles.productName}>{name}</h1>

      {/* 价格信息 */}
      <div style={styles.priceSection}>
        <span style={styles.currentPrice}>¥{price.toFixed(2)}</span>
        {originalPrice && (
          <span style={styles.originalPrice}>¥{originalPrice.toFixed(2)}</span>
        )}
      </div>

      {/* 服务保障 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>服务保障</h3>
        <div style={styles.serviceList}>
          <div style={styles.serviceItem}>✓ 7天无理由退换</div>
          <div style={styles.serviceItem}>✓ 48小时发货</div>
          <div style={styles.serviceItem}>✓ 正品保证</div>
          <div style={styles.serviceItem}>✓ 运费险</div>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    padding: "16px",
    backgroundColor: "white",
  },
  productName: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0 0 12px 0",
    color: "#333",
    lineHeight: "1.5",
  },
  priceSection: {
    display: "flex",
    alignItems: "baseline",
    gap: "8px",
    marginBottom: "16px",
  },
  currentPrice: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#e74c3c",
  },
  originalPrice: {
    fontSize: "14px",
    color: "#999",
    textDecoration: "line-through",
  },
  section: {
    marginTop: "16px",
    paddingTop: "16px",
    borderTop: "1px solid #f0f0f0",
  },
  sectionTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    margin: "0 0 12px 0",
    color: "#333",
  },
  serviceList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "8px",
  },
  serviceItem: {
    fontSize: "13px",
    color: "#666",
  },
};

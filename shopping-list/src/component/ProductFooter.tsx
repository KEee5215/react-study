interface ProductFooterProps {
  price: number;
  onCollect?: () => void;
  onCustomerService?: () => void;
  onBuy?: () => void;
}

export default function ProductFooter({
  price,
  onCollect,
  onCustomerService,
  onBuy,
}: ProductFooterProps) {
  return (
    <div style={styles.footer}>
      {/* 左侧区域 */}
      <div style={styles.leftSection}>
        {/* 店铺图标 */}
        <button style={styles.iconButton}>
          <span style={styles.icon}>🏪</span>
          <span style={styles.iconText}>店铺</span>
        </button>

        {/* 收藏按钮 */}
        <button style={styles.iconButton} onClick={onCollect}>
          <span style={styles.icon}>⭐</span>
          <span style={styles.iconText}>收藏</span>
        </button>

        {/* 客服图标 */}
        <button style={styles.iconButton} onClick={onCustomerService}>
          <span style={styles.icon}>💬</span>
          <span style={styles.iconText}>客服</span>
        </button>
      </div>

      {/* 右侧购买按钮 */}
      <button style={styles.buyButton} onClick={onBuy}>
        <div style={styles.buyContent}>
          <span style={styles.buyPrice}>¥{price.toFixed(2)}</span>
          <span style={styles.buyText}>发起拼单</span>
        </div>
      </button>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    backgroundColor: "white",
    borderTop: "1px solid #f0f0f0",
    padding: "8px 12px",
    gap: "12px",
    zIndex: 1000,
    boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
  },
  leftSection: {
    display: "flex",
    gap: "8px",
  },
  iconButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "4px 8px",
    minWidth: "50px",
  },
  icon: {
    fontSize: "20px",
  },
  iconText: {
    fontSize: "11px",
    color: "#666",
    marginTop: "2px",
  },
  buyButton: {
    flex: 1,
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "25px",
    padding: "12px 24px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.2s",
  },
  buyContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2px",
  },
  buyPrice: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  buyText: {
    fontSize: "12px",
  },
};

import { useState } from "react";

interface SpecOption {
  name: string;
  value: string;
}

interface SpecGroup {
  title: string;
  options: SpecOption[];
}

interface ProductSpecDrawerProps {
  visible: boolean;
  onClose: () => void;
  specGroups: SpecGroup[];
  price: number;
  onConfirm: (selectedSpecs: Record<string, string>) => void;
}

export default function ProductSpecDrawer({
  visible,
  onClose,
  specGroups,
  price,
  onConfirm,
}: ProductSpecDrawerProps) {
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({});

  const handleSelect = (specTitle: string, optionValue: string) => {
    setSelectedSpecs((prev) => ({
      ...prev,
      [specTitle]: optionValue,
    }));
  };

  const handleConfirm = () => {
    // 检查是否所有规格都已选择
    const allSelected = specGroups.every((group) => selectedSpecs[group.title]);
    
    if (!allSelected) {
      alert("请选择完整的商品规格");
      return;
    }

    onConfirm(selectedSpecs);
    onClose();
  };

  if (!visible) return null;

  return (
    <>
      {/* 遮罩层 */}
      <div style={styles.overlay} onClick={onClose} />

      {/* 抽屉内容 */}
      <div style={styles.drawer}>
        {/* 关闭按钮 */}
        <button style={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        {/* 规格选择区域 */}
        <div style={styles.content}>
          {specGroups.map((group) => (
            <div key={group.title} style={styles.specSection}>
              <h3 style={styles.specTitle}>{group.title}</h3>
              <div style={styles.optionsContainer}>
                {group.options.map((option) => {
                  const isSelected = selectedSpecs[group.title] === option.value;
                  return (
                    <button
                      key={option.value}
                      style={{
                        ...styles.optionButton,
                        ...(isSelected ? styles.selectedOption : {}),
                      }}
                      onClick={() => handleSelect(group.title, option.value)}
                    >
                      {option.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 底部确认按钮 */}
        <div style={styles.footer}>
          <button style={styles.confirmButton} onClick={handleConfirm}>
            确定 ¥{price.toFixed(2)}
          </button>
        </div>
      </div>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1001,
  },
  drawer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    maxHeight: "70vh",
    zIndex: 1002,
    display: "flex",
    flexDirection: "column",
  },
  closeButton: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#999",
    zIndex: 10,
  },
  content: {
    padding: "20px",
    overflowY: "auto",
    flex: 1,
  },
  specSection: {
    marginBottom: "20px",
  },
  specTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    margin: "0 0 12px 0",
    color: "#333",
  },
  optionsContainer: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  optionButton: {
    padding: "8px 16px",
    border: "1px solid #ddd",
    borderRadius: "20px",
    backgroundColor: "white",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s",
  },
  selectedOption: {
    borderColor: "#e74c3c",
    color: "#e74c3c",
    backgroundColor: "#fff5f5",
  },
  footer: {
    padding: "12px 16px",
    borderTop: "1px solid #f0f0f0",
  },
  confirmButton: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

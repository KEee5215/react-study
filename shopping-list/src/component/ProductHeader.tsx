import { useState } from "react";

interface ProductHeaderProps {
  images: string[];
}

export default function ProductHeader({ images }: ProductHeaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={styles.header}>
      {/* 返回按钮 */}
      <button style={styles.backButton} onClick={() => window.history.back()}>
        ← 返回
      </button>

      {/* 图片轮播 */}
      <div style={styles.carousel}>
        <img
          src={images[currentIndex]}
          alt="商品图片"
          style={styles.carouselImage}
        />

        {/* 左右切换按钮 */}
        <button style={styles.prevButton} onClick={handlePrev}>
          ‹
        </button>
        <button style={styles.nextButton} onClick={handleNext}>
          ›
        </button>

        {/* 页面指示器 */}
        <div style={styles.indicators}>
          {images.map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.indicator,
                ...(index === currentIndex ? styles.activeIndicator : {}),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: "12px",
    left: "12px",
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  },
  carousel: {
    position: "relative",
    width: "100%",
    aspectRatio: "1 / 1",
    backgroundColor: "#f5f5f5",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  prevButton: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    fontSize: "20px",
    cursor: "pointer",
  },
  nextButton: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    fontSize: "20px",
    cursor: "pointer",
  },
  indicators: {
    position: "absolute",
    bottom: "12px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
  },
  indicator: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transition: "all 0.3s",
  },
  activeIndicator: {
    backgroundColor: "white",
    width: "24px",
    borderRadius: "4px",
  },
};

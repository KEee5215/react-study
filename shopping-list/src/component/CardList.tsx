import Card from "./Card";

// 模拟商品数据
const mockProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 7999.0,
    image:
      "https://pic2.zhimg.com/v2-b54f85649c35bb1d2f5e890e0f89bb81_r.jpg?source=172ae18b",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 8999.0,
    image:
      "https://n.sinaimg.cn/spider20191213/560/w1080h1080/20191213/129f-ikrsess5970697.jpg",
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    price: 1899.0,
    image:
      "https://pic2.zhimg.com/v2-b54f85649c35bb1d2f5e890e0f89bb81_r.jpg?source=172ae18b",
  },
  {
    id: 4,
    name: "iPad Air",
    price: 4799.0,
    image:
      "https://n.sinaimg.cn/spider20191213/560/w1080h1080/20191213/129f-ikrsess5970697.jpg",
  },
  {
    id: 5,
    name: "Apple Watch Ultra",
    price: 6299.0,
    image:
      "https://pic2.zhimg.com/v2-b54f85649c35bb1d2f5e890e0f89bb81_r.jpg?source=172ae18b",
  },
  {
    id: 6,
    name: "Magic Keyboard",
    price: 2399.0,
    image:
      "https://n.sinaimg.cn/spider20191213/560/w1080h1080/20191213/129f-ikrsess5970697.jpg",
  },
];

export default function CardList() {
  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {mockProducts.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "12px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
    maxWidth: "600px",
    margin: "0 auto",
  },
};

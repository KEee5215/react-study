import { useState } from "react";
import ProductFooter from "../component/ProductFooter";
import ProductHeader from "../component/ProductHeader";
import ProductMain from "../component/ProductMain";
import ProductSpecDrawer from "../component/ProductSpecDrawer";

// 模拟商品数据
const productData = {
  images: [
    "https://pic2.zhimg.com/v2-b54f85649c35bb1d2f5e890e0f89bb81_r.jpg?source=172ae18b",
    "https://pic2.zhimg.com/v2-b54f85649c35bb1d2f5e890e0f89bb81_r.jpg?source=172ae18b",
    "https://pic2.zhimg.com/v2-b54f85649c35bb1d2f5e890e0f89bb81_r.jpg?source=172ae18b",
    "https://pic2.zhimg.com/v2-b54f85649c35bb1d2f5e890e0f89bb81_r.jpg?source=172ae18b",
  ],
  name: "Apple iPhone 15 Pro Max 256GB 原色钛金属 支持移动联通电信5G 双卡双待手机",
  price: 9999.0,
  originalPrice: 10999.0,
  // 动态规格数据
  specGroups: [
    {
      title: "颜色",
      options: [
        { name: "原色钛金属", value: "natural" },
        { name: "蓝色钛金属", value: "blue" },
        { name: "白色钛金属", value: "white" },
        { name: "黑色钛金属", value: "black" },
      ],
    },
    {
      title: "尺寸",
      options: [
        { name: "128GB", value: "128gb" },
        { name: "256GB", value: "256gb" },
        { name: "512GB", value: "512gb" },
        { name: "1TB", value: "1tb" },
      ],
    },
  ],
};

export default function ProductDetailPage() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleCollect = () => {
    console.log("收藏商品");
    alert("已收藏!");
  };

  const handleCustomerService = () => {
    console.log("联系客服");
    alert("客服功能开发中...");
  };

  const handleBuy = () => {
    // 点击"发起拼单"时打开抽屉
    setDrawerVisible(true);
  };

  const handleSpecConfirm = (selectedSpecs: Record<string, string>) => {
    console.log("选择的规格:", selectedSpecs);
    alert(
      `已选择: ${Object.entries(selectedSpecs)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ")}`,
    );
    // 这里可以跳转到订单确认页面或加入购物车
  };

  return (
    <div style={{ paddingBottom: "80px" }}>
      <ProductHeader images={productData.images} />
      <ProductMain
        name={productData.name}
        price={productData.price}
        originalPrice={productData.originalPrice}
      />
      <ProductFooter
        price={productData.price}
        onCollect={handleCollect}
        onCustomerService={handleCustomerService}
        onBuy={handleBuy}
      />

      {/* 规格选择抽屉 */}
      <ProductSpecDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        specGroups={productData.specGroups}
        price={productData.price}
        onConfirm={handleSpecConfirm}
      />
    </div>
  );
}

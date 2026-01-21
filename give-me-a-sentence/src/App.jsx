import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const base_url = "https://api-v2.cenguigui.cn/api/juhe/?type=json&msg=";

  const [msgType, setMsgType] = useState("毒鸡汤");

  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // function handClicked() {
  //   isLoading ? setIsLoading(false) : setIsLoading(true);
  // }
  async function getSentence() {
    setIsLoading(true);
    console.log(base_url + msgType);
    const response = await fetch(base_url + msgType);
    const sentence = await response.json();

    setText(sentence.text);
    setIsLoading(false);
  }

  useEffect(() => {
    getSentence();
  }, []);

  return (
    <>
      <main>
        <h1>Give Me A Sentence</h1>
        <select
          name="msgType"
          id="msgType"
          value={msgType}
          onChange={(e) => setMsgType(e.target.value)}
        >
          <option value="毒鸡汤">毒鸡汤</option>
          <option value="随机一言">随机一言</option>
          <option value="QQ签名">QQ签名</option>
          <option value="趣味笑话">趣味笑话</option>
          <option value="英汉语录">英汉语录</option>
          <option value="爱情语录">爱情语录</option>
          <option value="经典语录">经典语录</option>
          <option value="诗词">诗词</option>
          <option value="情话">情话</option>
          <option value="骚话">骚话</option>
        </select>
        <p>{text}</p>
        <button onClick={getSentence} disabled={isLoading}>
          {isLoading ? "Loading..." : "Get a sentence"}
        </button>
      </main>
    </>
  );
}

export default App;

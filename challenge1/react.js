function App() {
  const [purple, setPurple] = React.useState(false);
  const [selectText, setSelectText] = React.useState("white");
  const [circleSize, setCircleSize] = React.useState(100);
  const [circleRotate, setCircleRotate] = React.useState(0);

  function handlePurlple() {
    setPurple(!purple);
  }

  // const isPurple = purple ? "purple" : "white";

  const circleStyle = function () {
    const backgroundColor = purple ? "purple" : "green";
    const size = circleSize > 0 ? circleSize : 0;
    return {
      backgroundColor: backgroundColor,
      width: size + "px",
      height: size + "px",
      transform: `rotate(${circleRotate}deg)`,
      transition: "all 0.5s ease",
    };
  };

  const textStyle = () => {
    const textColor = selectText;
    return { color: textColor };
  };
  return (
    <main>
      {/* 复选框 */}
      <label>
        Purple
        <input type="checkbox" onChange={handlePurlple}></input>
      </label>

      <label>
        text color
        <select
          value={selectText}
          onChange={(e) => setSelectText(e.target.value)}
        >
          <option value="white">white</option>
          <option value="black">black</option>
        </select>
      </label>

      <label>
        Circle Size
        <input
          type="number"
          value={circleSize}
          onChange={(e) => setCircleSize(e.target.value)}
        ></input>
      </label>

      <label>
        Circle Rotate
        <input
          type="number"
          value={circleRotate}
          onChange={(e) => setCircleRotate(e.target.value)}
        ></input>
      </label>

      <div className="circle" style={circleStyle()}>
        <h1 className="hi" style={textStyle()}>
          hi
        </h1>
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);

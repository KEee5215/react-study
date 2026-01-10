function App() {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <>
      <h1>Title</h1>
      <input className="vanilla-input" type="text" onChange={handleChange} />
      <p className="vanilla-p">{inputText}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);

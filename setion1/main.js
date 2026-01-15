function App() {
  const [inputText, setInputText] = React.useState("");
  function handleChange(event) {
    const changeInput = event.target.value;
    setInputText(changeInput);
  }
  return (
    <>
      <h1>Title</h1>
      <input type="text" onChange={handleChange}></input>
      <p>{inputText}</p>
    </>
  );
}

const rootElement = document.getElementById("app"); //get root element

const root = ReactDOM.createRoot(rootElement); //create root object

root.render(<App />); //render the App component to the root

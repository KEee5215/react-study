function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const usernameError =
    username.length < 3 && username.length > 0 ? "error-message" : "";

  const passwordError =
    password.length < 3 && password.length > 0 ? "error-message" : "";
  function handleSubmit(event) {
    event.preventDefault();
    if (usernameError || passwordError) {
      alert("Please fill out all fields correctly");
      return;
    }
    alert(`Username: ${username} Password: ${password}`);
    setUsername("");
    setPassword("");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "300px",
          boxShadow: "0 0 10px 10px pink",
          backgroundColor: "#f0f0f0",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <h1>Login</h1>
        <input
          style={{ margin: "10px" }}
          className={usernameError}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <br></br>
        <input
          style={{ margin: "10px" }}
          className={passwordError}
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <br></br>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

const rootElement = document.getElementById("app"); //get root element

const root = ReactDOM.createRoot(rootElement); //create root object

root.render(<App />); //render the App component to the root

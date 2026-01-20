import { useState } from "react";
import UsernameInput from "./usernameInput";
import PasswordInput from "./PasswordInput";
import AppInput from "./AppInput";
import AppButton from "./AppButton";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <AppInput
          type="text"
          value={username}
          setValue={setUsername}
          className={usernameError}
        />
        <br></br>
        <AppInput
          type="password"
          value={password}
          setValue={setPassword}
          className={passwordError}
        />
        <br></br>
        <AppButton>Login</AppButton>
        <AppButton>Signup</AppButton>
      </form>
    </>
  );
}

export default App;

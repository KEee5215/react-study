function PasswordInput({ password, setPassword, passwordError }) {
  return (
    <input
      style={{ margin: "10px" }}
      className={passwordError}
      type="text"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    ></input>
  );
}

export default PasswordInput;

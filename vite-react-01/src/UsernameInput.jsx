function UsernameInput({ username, setUsername, usernameError }) {
  return (
    <input
      style={{ margin: "10px" }}
      className={usernameError}
      type="text"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
    ></input>
  );
}

export default UsernameInput;

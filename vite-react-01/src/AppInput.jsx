function AppInput(props) {
  const { type, value, className, setValue } = props;

  return (
    <input
      style={{ margin: "10px" }}
      className={className}
      type={type}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    ></input>
  );
}

export default AppInput;

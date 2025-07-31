import "./Button.css";

export default function Button(props) {
  return (
    <>
      <input
        className="btn"
        type="button"
        value={props.value}
        style={{
          backgroundColor: `${props.backgroundColor}`,
          color: `${props.color}`,
        }}
      />
    </>
  );
}

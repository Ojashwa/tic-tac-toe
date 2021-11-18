import "./App.css";

function Square(props) {
  return (
    <span
      className="square-border"
      style={{ color: props.state === "X" ? "#f52a1c" : "#00FF00" }}
      onClick={props.handleSquareClick}
    >
      {props.state}
    </span>
  );
}

export default Square;

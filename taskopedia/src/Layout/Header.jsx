import logo from "../images/react.png";

function Header() {
  return (
    <div className="pt-3 text-center">
      <img src={logo} style={{ width: "30px" }}></img>
      <span className="text-success"> Welcome to the React Course!</span>
      <hr />
    </div>
  );
}

export default Header;

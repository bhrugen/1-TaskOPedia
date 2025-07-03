import { createRoot } from "react-dom/client";
import "./style.css";
import logo from "./images/react.png";
const root = createRoot(document.getElementById("root"));
const courseName = "React";
const lectureCount = 11;
const isActive = true;

function HomePage() {
  return (
    <div>
      <Header />
      <p className="customHeading">We are super excited to learn React</p>
      <h3>Topics to learn in {courseName} Course</h3>
      <p> Lecture Count - {lectureCount}</p>
      <p> Is Active : {isActive ? "Active" : "Inactive"}</p>
      <ul>
        <li>JSX</li>
        <li>Components</li>
        <li>Routing</li>
        <li>State Managment</li>
      </ul>
      <div>
        Enter Task :{" "}
        <input type="text" maxLength={6} disabled={isActive}></input>
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="pt-1 text-center">
      <img src={logo} style={{ width: "30px" }}></img>
      <span className="text-success"> Welcome to the React Course!</span>
      <hr />
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>Made with Love by DotNetMastery</p>
    </div>
  );
}

root.render(
  <div>
    <HomePage />
  </div>
);

import { createRoot } from "react-dom/client";
import "./style.css";
const root = createRoot(document.getElementById("root"));
const pageStyle = {
  textAlign: "center",
  backgroundColor: "lightgray",
  padding: "10px",
};
function HomePage() {
  return (
    <div>
      <Header />
      <p className="customHeading">We are super excited to learn React</p>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 style={pageStyle} className="text-success">
        Welcome to the React Course!
      </h1>
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

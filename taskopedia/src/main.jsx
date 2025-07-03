import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function HomePage() {
  return (
    <div>
      <Header />
      <p>We are super excited to learn React</p>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to the React Course!</h1>
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

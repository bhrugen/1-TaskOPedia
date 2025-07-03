import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function HomePage() {
  return (
    <div>
      <p>We are super excited to learn React</p>
      <Footer />
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

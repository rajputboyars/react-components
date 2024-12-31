import React from "react";
import Header from "./components/Header";
import SearchHeader from "./components/SearchHeader";
// import Header from "./Header";

const App = () => {
  const logo = "https://example.com/logo.png"; // Use a logo URL or text
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <Header  logo={logo} links={links} />
      <SearchHeader  logo={logo} links={links} />
      <main>
        <h1>Welcome to the Website</h1>
      </main>
    </div>
  );
};

export default App;

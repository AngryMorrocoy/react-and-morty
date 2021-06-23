import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [text, setText] = useState("Rick");

  return (
    <header className="main-header">
      <h1>
        <span
          onMouseEnter={() => setText("React")}
          onMouseLeave={() => setText("Rick")}
        >{text}
        </span> & Morty
      </h1>
    </header>
  );
};

export default Header;

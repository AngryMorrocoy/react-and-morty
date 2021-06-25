import "./Navbar.css";
import NavItem from "./NavItem";
import SearchCharacterForm from "./SearchCharacterForm";
import { useState } from "react";

const Navbar = () => {
  const [whichForm, setWhichForm] = useState(null);

  const navItems = [
    [
      "Characters",
      () =>
        whichForm !== "characters" ? setWhichForm("characters") : setWhichForm(null),
    ],
    [
      "Episodes",
      () =>
        whichForm !== "episodes" ? setWhichForm("episodes") : setWhichForm(null),
    ],
    [
      "Locations",
      () =>
        whichForm !== "locations" ? setWhichForm("locations") : setWhichForm(null),
    ],
  ];

  return (
    <>
      <nav>
        <h3>Logo</h3>
        <ul>
          {navItems.map(([text, onClick]) => {
            return <NavItem key={text} content={text} onClick={onClick} />;
          })}
        </ul>
      </nav>
      { whichForm === "characters" && <SearchCharacterForm /> }
    </>
  );
};

export default Navbar;

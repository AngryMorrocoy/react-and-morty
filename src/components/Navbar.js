import "./Navbar.css";
import NavItem from "./NavItem";
import SearchCharacterForm from "./SearchCharacterForm";
import { useState } from "react";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <nav>
        <h3>Logo</h3>
        <NavItem content="Characters" onClick={() => setShowForm(!showForm)} />
      </nav>
      <div className={`form-section ${showForm ? "display-grid" : ""}`}>
        {showForm && <SearchCharacterForm />}
        <FaReact className="react-logo" />
      </div>
    </>
  );
};

export default Navbar;

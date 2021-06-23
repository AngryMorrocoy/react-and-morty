import "./Navbar.css";
import NavItem from "./NavItem";

const Navbar = () => {
  const navItems = ["Characters", "Episodes", "Locations"];

  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        {navItems.map((navItem) => {
          return <NavItem key={navItems.indexOf(navItem)} content={navItem} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

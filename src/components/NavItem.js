import "./NavItem.css";
import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";

const NavItem = ({ content, onClick }) => {
  return (
    <li onClick={onClick}>
      <BsSearch /> {content}
    </li>
  );
};

NavItem.propTypes = {
  content: PropTypes.string.isRequired,
};

export default NavItem;

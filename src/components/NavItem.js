import "./NavItem.css";
import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";

const NavItem = ({ content }) => {
  return (
    <li>
      <BsSearch /> {content}
    </li>
  );
};

NavItem.propTypes = {
  content: PropTypes.string.isRequired,
};

export default NavItem;

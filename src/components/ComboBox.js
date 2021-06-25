import PropTypes from "prop-types";
import "./ComboBox.css";

const ComboBox = ({ id, options, setState }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <select
        onChange={(event) => setState(event.currentTarget.value)}
        id={id}
        name={id}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {capitalize(option)}
            </option>
          );
        })}
      </select>
    </>
  );
};

ComboBox.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default ComboBox;

import PropTypes from "prop-types";
import "./InputText.css";

const InputText = ({ placeholder, id, setState }) => {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      name={id}
      onChange={(event) => setState(event.currentTarget.value)}
    />
  );
};

InputText.defaultProps = {
  placeholder: "Placeholder by default",
};

InputText.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default InputText;

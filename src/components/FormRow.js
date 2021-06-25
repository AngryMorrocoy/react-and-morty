import "./FormRow.css";
import PropTypes from "prop-types";

const FormRow = ({ name, input }) => {
  const label = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="form-row">
      <label htmlFor={name}>{label}</label>
      {input}
    </div>
  );
};

FormRow.propTypes = {
  name: PropTypes.string.isRequired,
  input: PropTypes.any.isRequired,
};

export default FormRow;

import FormRow from "./FormRow";
import "./Form.css";

const Form = ({ rows, onSubmit, submitButtonText }) => {
  return (
    <form onSubmit={onSubmit} className="search-form">
      {rows.map(([index, name, input]) => {
        return <FormRow key={index} name={name} input={input} />;
      })}

      <input type="submit" value={submitButtonText} className="btn-submit" />
    </form>
  );
};

Form.defaultProps = {
  submitButtonText: "Submit Form"
}

export default Form;

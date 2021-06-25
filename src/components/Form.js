import FormRow from "./FormRow";
import "./Form.css";

const Form = ({ rows, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {rows.map(([index, name, input]) => {
        return <FormRow key={index} name={name} input={input} />;
      })}

      <input type="submit" value="Submit Form" className="btn-submit" />
    </form>
  );
};

export default Form;

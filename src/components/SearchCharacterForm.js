import Form from "./Form";
import InputText from "./InputText";
import ComboBox from "./ComboBox";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const SearchCharacterForm = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("any");
  const [gender, setGender] = useState("any");
  const [redirect, setRedirect] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (redirect == null) return;
    console.log(history)
    history.push(redirect);
    setRedirect(null);
  }, [redirect, history]);

  const rows = [
    [
      0,
      "name",
      <InputText placeholder="Name..." id="name" setState={setName} />,
    ],
    [
      1,
      "status",
      <ComboBox
        id="status"
        options={["any", "alive", "dead", "unknown"]}
        setState={setStatus}
      />,
    ],
    [
      2,
      "gender",
      <ComboBox
        id="gender"
        options={["any", "male", "female", "genderless", "unknown"]}
        setState={setGender}
      />,
    ],
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const redirectUrl = `/search/?name=${name}&status=${
      status !== "any" ? status : ""
    }&gender=${gender !== "any" ? gender : ""}`;
    setRedirect(redirectUrl);
  };

  return (
    <>
      <Form rows={rows} onSubmit={handleSubmit} />
    </>
  );
};

export default SearchCharacterForm;

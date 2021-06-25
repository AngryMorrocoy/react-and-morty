import Form from "./Form";
import InputText from "./InputText";
import ComboBox from "./ComboBox";
import { useState } from "react";

const SearchCharacterForm = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("any");
  const [gender, setGender] = useState("any");

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
    let url = `https://rickandmortyapi.com/api/character/?name=${name}`
    url += status !== "any" ? `&status=${status}` : "";
    url += gender !== "any" ? `&gender=${gender}` : "";
    const response = await fetch(url);
    console.log(await response.json());
  };

  return (
    <>
      <Form rows={rows} onSubmit={handleSubmit} />
    </>
  );
};

export default SearchCharacterForm;
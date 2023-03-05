import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import "./tailwind.css";

const App = () => {
  const [values, setValues] = useState({
    id: "",
    email: "",
    date: "",
    // password: "",
    // confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "ID",
      type: "text",
      placeholder: "ID",
      errorMessage:
        "the combination is unique and unrepeatable by user!",
      label: "Your id",
      pattern: "",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "CreatedAt",
      type: "date",
      placeholder: "Created At",
      label: "Created At",
    },
    {
      id: 5,
      name: "UpdatedAt",
      type: "date",
      placeholder: "Updated At",
      label: "Updated At",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

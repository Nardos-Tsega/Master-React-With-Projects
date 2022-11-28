import { useState } from "react";

const Form = ({ handleAddEmployee }) => {
  const [nameField, setNameField] = useState("");
  const [gender, setGenderField] = useState("");
  const [birthdateField, setBirthDateField] = useState("");
  const [salaryField, setSalaryField] = useState("");

  async function AddEmployee(name, gender, birthdate, salary) {
    await fetch("http://localhost:3000/employees/", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        birthdate: birthdate,
        gender: gender,
        salary: salary,
        id: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.JSON())
      .then((data) => {
        handleAddEmployee(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleEmployee(e) {
    e.preventDefault();
    AddEmployee(nameField, gender, birthdateField, salaryField);
    setNameField("");
    setGenderField("");
    setBirthDateField("");
    setSalaryField("");
  }
  return (
    <div className="shadow-lg">
      <h1 className="bg-[#FA8C3C] text-white py-6 px-4 text-center text-lg font-medium rounded-md">
        Add New
      </h1>
      <form
        onSubmit={handleEmployee}
        className="w-full px-6 py-6 mx-auto flex flex-col gap-5"
      >
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
            value={nameField}
            onChange={(e) => setNameField(e.target.value)}
          />
        </label>
        <label htmlFor="name">
          Birth Date
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
            value={birthdateField}
            onChange={(e) => setBirthDateField(e.target.value)}
          />
        </label>
        <label htmlFor="name">
          Gender
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
            value={gender}
            onChange={(e) => setGenderField(e.target.value)}
          />
        </label>
        <label htmlFor="name">
          Salary
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
            value={salaryField}
            onChange={(e) => setSalaryField(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-[#FA8C3C] h-10 text-white rounded-full w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;

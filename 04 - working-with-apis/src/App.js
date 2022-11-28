import Form from "./components/Form";
import Table from "./components/Table";
import { useState, useEffect } from "react";

const App = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data);
      });
  }, []);

  function handleAddEmployee(data) {
    setEmployee((data) => [data, ...employees]);
  }

  function handleDelete(id) {
    setEmployee((employees) =>
      employees.filter((employee) => employee.id !== id)
    );
  }

  return (
    <div>
      {/* header */}
      <div className="bg-[#24CEC8] text-white h-32 flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          <span className="font-light">Employee</span> Management
        </h1>
      </div>
      {/* body */}
      <div className="grid grid-cols-12 gap-x-12 container max-w-6xl mt-8 mx-auto">
        {/* form */}
        <div className="col-span-4 col-start-1">
          <Form handleAddEmployee={handleAddEmployee} />
        </div>
        {/* table */}
        <div className="col-span-9 col-start-5">
          <Table handleDelete={handleDelete} employees={employees} />
        </div>
      </div>
    </div>
  );
};

export default App;

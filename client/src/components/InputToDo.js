import React, { useState } from "react";

function InputToDo() {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      /* const data = await response.json(); */
      // console.log(data);
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">PERN TO-DO LST</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">ADD</button>
      </form>
    </>
  );
}

export default InputToDo;

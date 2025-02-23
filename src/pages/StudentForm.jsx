import React, { useState } from 'react';
import '../App.css';

const StudentForm = () => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [collegename, setCollege] = useState("");
  const [DOB, setDOB] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, dept, collegename, DOB };
    console.log(data);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading">STUDENT DETAILS</h1>
        <input
          className="input"
          type="text"
          required
          value={name}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          required
          value={dept}
          placeholder="Enter your Department"
          onChange={(e) => setDept(e.target.value)}
        />
        <input
          className="input"
          type="text"
          required
          value={collegename}
          placeholder="College Name"
          onChange={(e) => setCollege(e.target.value)}
        />
        <input
          className="DOB"
          type="date"
          required
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;

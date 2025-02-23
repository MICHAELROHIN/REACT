import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StudentForm from './pages/StudentForm';
import Feedback from './pages/Feedback';

const App = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/student-form">Student Form</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Feedback />} />
        <Route path="/student-form" element={<StudentForm />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../services/api';

function AddStudent() {
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(formData);
    navigate('/students');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Add Student</h2>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '10px' }}>
          <label>{key}</label><br />
          <input
            type={key === 'dob' ? 'date' : 'text'}
            name={key}
            value={value}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Add</button>
    </form>
  );
}

export default AddStudent;

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
    enrollmentYear: '',
    isActive: true, // default active
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(formData);
    navigate('/students');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Add Student</h2>
      {Object.entries(formData).map(([key, value]) => {
        if (key === 'isActive') {
          return (
            <div key={key} className="checkbox-group">
              <input
                type="checkbox"
                name={key}
                checked={value}
                onChange={handleChange}
                id={key}
              />
              <label htmlFor={key}>Active</label>
            </div>
          );
        }

        return (
          <div key={key} style={{ marginBottom: '10px' }}>
            <label htmlFor={key}>{key}</label><br />
            <input
              type={key === 'dob' ? 'date' : 'text'}
              name={key}
              value={value}
              onChange={handleChange}
              id={key}
              required
            />
          </div>
        );
      })}
      <button type="submit">Add</button>
    </form>
  );
}

export default AddStudent;

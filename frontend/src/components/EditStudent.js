import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudent, updateStudent } from '../services/api';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getStudent(id);
      setStudent(data);
    };
    fetch();
  }, [id]);

  const handleChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(id, student);
    navigate('/students');
  };

  if (!student) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Edit Student</h2>
      {Object.entries(student).map(([key, value]) => (
        key !== "_id" && key !== "__v" && key !== "createdAt" && (
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
        )
      ))}
      <button type="submit">Update</button>
    </form>
  );
}

export default EditStudent;

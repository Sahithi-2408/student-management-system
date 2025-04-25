import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../services/api';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await getStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await deleteStudent(id);
      fetchData();
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Student List</h2>
      <Link to="/add">Add Student</Link>
      <table border="1" cellPadding="10" style={{ marginTop: '1rem', width: '100%' }}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Enrollment Year</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.studentId}</td> {/* Display Student ID */}
              <td>{s.firstName} {s.lastName}</td>
              <td>{s.email}</td>
              <td>{s.department}</td>
              <td>{s.enrollmentYear}</td>
              <td>{new Date(s.dob).toLocaleDateString()}</td> {/* Display Date of Birth */}
              <td>
                <Link to={`/edit/${s._id}`} style={{ marginRight: '10px' }}>Edit</Link>
                <button onClick={() => handleDelete(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;

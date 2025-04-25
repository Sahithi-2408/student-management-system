import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎓 Welcome to the Student Management System</h1>
      <p>Use this application to manage student records.</p>
      <p>
        This website allows administrators to easily add, view, edit, and delete student records.
        It provides a simple interface for managing essential information about students, such as
        their names, grades, and enrollment details.
      </p>
      <nav style={{ marginTop: '1rem' }}>
        <Link to="/students" style={{ marginRight: '1rem' }}>View Students</Link>
        <Link to="/add">Add Student</Link>
      </nav>
    </div>
  );
}

export default Home;

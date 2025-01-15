// src/ExercisePage.js
import React, { useState } from "react";
import "./exercisepage.css"; // Import your existing CSS

const ExercisePage = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseList, setExerciseList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new exercise to the list
    setExerciseList([...exerciseList, exerciseName]);

    // Clear the input field after submission
    setExerciseName("");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleRowClick = (exercise) => {
    // Navigate to the workout tracker (you may want to use react-router for navigation)
    window.location.href = `/log?exercise=${encodeURIComponent(exercise)}`;
  };

  const filteredExercises = exerciseList.filter((exercise) =>
    exercise.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="exercise-page">
      <h1>Exercise Manager</h1>

      {/* Form to add exercise */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="exercise">Add Exercise</label>
        <input
          type="text"
          id="exercise"
          name="exercise"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          required
        />
        <button type="submit">Add Exercise</button>
      </form>

      {/* Search Bar */}
      <input
        type="text"
        id="searchBar"
        placeholder="Search exercises..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <h2>Exercise List</h2>

      <table>
        <thead>
          <tr>
            <th>Exercise Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredExercises.map((exercise, index) => (
            <tr key={index} onClick={() => handleRowClick(exercise)}>
              <td>{exercise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExercisePage;

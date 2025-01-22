import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./exercisepage.css";

const ExercisePage = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseList, setExerciseList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setExerciseList([...exerciseList, exerciseName]);
    setExerciseName("");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleRowClick = (exercise) => {
    navigate(`/log?exercise=${encodeURIComponent(exercise)}`);
  };

  const filteredExercises = exerciseList.filter((exercise) =>
    exercise.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="exercise-page">
      <h1>Exercise Manager</h1>

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

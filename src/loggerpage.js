import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./loggerpage.css";
//backs
const LogPage = () => {
  const location = useLocation();
  const exerciseName =
    new URLSearchParams(location.search).get("exercise") || "None";
  const [formData, setFormData] = useState({
    weight: "",
    sets: "",
    reps: "",
    date: "",
  });
  const [workoutHistory, setWorkoutHistory] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setWorkoutHistory((prev) => [...prev, formData]);
    setFormData({ weight: "", sets: "", reps: "", date: "" });
  };

  return (
    <div>
      <h1>Workout Tracker</h1>
      <h3>Exercise: {exerciseName}</h3>

      <form onSubmit={handleFormSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="weight">Weight (lbs):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="sets">Set:</label>
            <input
              type="number"
              id="sets"
              name="sets"
              value={formData.sets}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="reps">Reps:</label>
            <input
              type="number"
              id="reps"
              name="reps"
              value={formData.reps}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <button type="submit">Add Set</button>
      </form>

      <h2>Workout History</h2>
      <table>
        <thead>
          <tr>
            <th>Weight (lbs)</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {workoutHistory.map((entry, index) => (
            <tr key={index}>
              <td>{entry.weight}</td>
              <td>{entry.sets}</td>
              <td>{entry.reps}</td>
              <td>{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogPage;

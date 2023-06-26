import React, { useState } from 'react';
import './App.css';


export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [favoriteFood, setFavoriteFood] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Slam Book</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="text"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="favoriteColor">Favorite color:</label>
            <input
              type="text"
              id="favoriteColor"
              value={favoriteColor}
              onChange={(e) => setFavoriteColor(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="favoriteFood">Favorite food:</label>
            <input
              type="text"
              id="favoriteFood"
              value={favoriteFood}
              onChange={(e) => setFavoriteFood(e.target.value)}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>{name}</h2>
          <p>{age} Years Old</p>
          <p>{contactNumber}</p>
          <h3>Favorites</h3>
          <p>{favoriteColor}</p>
          <p>{favoriteFood}</p>
        </div>
      )}
    </div>
  );
}


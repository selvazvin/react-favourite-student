import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []); 

  
  const removeFavorite = (student) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== student.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));  
  };

  return (
    <div className='fav'>
      <h3>Favorite Students</h3>
      {favorites.length === 0 ? (
        <p>No favorite students yet!</p>
      ) : (
        <ul>
          {favorites.map((student) => (
            <li key={student.id}>
              {student.name}
              <button onClick={() => removeFavorite(student)}>Remove from Favorites</button>
            </li>
          ))}
        </ul>
      )}
      {/* <div>
        <Link to="/">Go back to Students List</Link>
      </div> */}
    </div>
  );
};

export default FavoriteList;

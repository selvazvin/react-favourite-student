import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students] = useState([
    { id: 1, name: 'Selva' },
    { id: 2, name: 'Kutty' },
    { id: 3, name: 'kumar' },
    { id: 4, name: 'Navani' }
  ]);

  const [favorites, setFavorites] = useState(() => {
   
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  const handleFavorite = (student) => {
    
    if (!favorites.some(fav => fav.id === student.id)) {
      const updatedFavorites = [...favorites, student];
      setFavorites(updatedFavorites);
      
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className='stud'>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <button
                  disabled={favorites.some(fav => fav.id === student.id)} // Disable button if already in favorites
                  onClick={() => handleFavorite(student)}
                >
                  {favorites.some(fav => fav.id === student.id) ? 'Added to Favorites' : 'Add to Favorite'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
        <Link to="/favorites">Go to Favorite List</Link>
      </div> */}
    </div>
  );
};

export default StudentList;

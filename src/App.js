import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link for navigation
import StudentList from './components/StudentList';
import FavoriteList from './components/FavoriteList';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='title'>
          
          <h1>
            <Link to="/" >
              List of Students
            </Link>
          </h1>
          <h1>
            <Link to="/favorites">
              Favorite Student
            </Link>
          </h1>
        </div>
        
       
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favorites" element={<FavoriteList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

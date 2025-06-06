// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import AboutMePage from './AboutMePage';
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path = "/" element = {<HomePage />} />
                <Route path = "/projects" element = {<ProjectsPage />} />
                <Route path = "/about" element = {<AboutMePage />} />
            </Routes>
        </div>
    )
}

export default App;

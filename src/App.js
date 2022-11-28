import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { MdMovie, MdAnnouncement, MdNotes } from 'react-icons/md'
import About from './pages/About/About';
import Drama from './pages/Drama/Drama';
import Quotes from './pages/Quotes/Quotes';
import Sinopsis from './pages/Sinopsis/Sinopsis';
import Cast from './pages/Cast/Cast';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h3 id="titleGroup">K-LIST</h3>
        <p id="titleGroup2">K-DRAMA ~ K-QUOTES</p>
      </header>
      <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/sinopsis" element={<Sinopsis/>} />
          <Route path="/cast" element={<Cast/>} />
      </Routes>
      <footer>
        <NavLink to="/drama" className="iconWrapper">
          <MdMovie className="icon" />
          K-Drama
        </NavLink>
        <NavLink to="/quotes" className="iconWrapper">
          <MdNotes className="icon" />
          K-Quotes
        </NavLink>
        <NavLink to="/" className="iconWrapper">
          <MdAnnouncement className="icon"/>
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App

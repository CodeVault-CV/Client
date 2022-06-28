import React from 'react';
import "./styles/reset.css";

import Navbar from './blocks/Navbar';
import StudyList from './pages/Study/StudyList'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <StudyList />
    </React.Fragment>
  );
}

export default App;

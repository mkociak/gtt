import React from 'react';
import '../styles/App.scss';
import Header from '../layouts/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;

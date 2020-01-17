import React from 'react';
import PlayerList from './components/PlayersList';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PlayerList />
    </div>
  );
}

export default App;

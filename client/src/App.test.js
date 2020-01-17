import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCard from './components/PlayerCard.js';
import {render} from '@testing-library/react';


test('conatins Julie Ertz', async () => {
  const julieErtz = [{
    name: "Julie Ertz",
    location: 'DOM'
  }]
  const container = await render(
    <PlayerCard players={julieErtz} />
  )
  container.getByText('Julie Ertz')
})
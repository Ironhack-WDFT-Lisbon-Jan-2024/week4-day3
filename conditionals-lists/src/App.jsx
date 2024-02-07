import { useState } from 'react'
import './App.css'; 
import celebs from "./data/celebs.json";

import FiveRandomCelebs from './components/FiveRandomCelebs';

function App() {


  /* 
  EXERCISE: I want to have a button that, once I click it, I show 5 random celebrities (image / name)
  */

  return (
    <section>
        <FiveRandomCelebs/>
    </section>
  );
}

export default App

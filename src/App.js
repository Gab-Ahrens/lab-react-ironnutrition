import React from 'react';
import Foods from './foods.json';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';


function App() {
  return (
    <div className="App">

      <FoodBox/>
      <FoodBox />
      <FoodBox />
      <FoodBox />
      <FoodBox />
      <FoodBox />
      <FoodBox />


    </div>
  );
}

export default App;

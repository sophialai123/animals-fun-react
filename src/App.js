import React from 'react';
import './App.css';
import animals from './components/animals';
import ocean from './images/ocean.png'


const title = '';
const showBackground = false;
const background = <img
  className="background"
  alt="ocean"
  src={ocean}
/>

//push all the image in the array
let images = [];
for (const animal in animals) {
  // images.push(animals[animal].image)
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

function displayFact(e) {
  let selectedAnimal = e.target.alt;
  let animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];

  //display on the screen
  document.getElementById('fact').innerHTML = funFact

}


function App() {
  return (
    <div>

      {/*if title is false the will render on the right side*/}
      <h1>{title || 'Click an animal for a fun fact'}</h1>
      {/* if showBackground is true, the background will show */}
      {showBackground && background}
      <p id='fact'></p>
      <div className="animals">
        {images}
      </div>
    </div>

  );
}

export default App;


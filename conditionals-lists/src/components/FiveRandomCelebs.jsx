import celebs from "../data/celebs.json";

import {useState} from 'react';


function FiveRandomCelebs(){

    const [fiveCelebs, setFiveCelebs] = useState(null);

    function getRandomCelebs(){
        // Duplicated Array via spread Operator
        let allCelebrities = [...celebs];

        // New Array of 5 random Celebrities
        let randomCelebs = [];

        // Loop 5 Times to have 5 random Celebrities
        for (let i=0; i<5; i++){
            // Generate a random index between 0 and allCelebrities.length - 1
            let randomIndex = Math.floor(Math.random() * allCelebrities.length); 

            // Push the random object (allCelebrities[randomIndex]) to the new array.
            randomCelebs.push(allCelebrities[randomIndex]);

            // Remove the random object from the allCelebs array.
            allCelebrities.splice(randomIndex, 1);
        }

        // NOT GOOD, NOT GOOD AT ALL : fiveCelebs = randomCelebs;
        
        // Update the State with 5 random Celebrities
        setFiveCelebs(randomCelebs);
    }

    return (
      <div>
        <div>
          {/* {fiveCelebs? (
            fiveCelebs.map((celebrity) => {
              return (
                <div key={celebrity.id}>
                  <img src={celebrity.pictureUrl} />
                  <h3>{celebrity.name}</h3>
                </div>
              );
            })}) : null */}
          {fiveCelebs &&
            fiveCelebs.map((celebrity) => {
              return (
                <div key={celebrity.id}>
                  <img src={celebrity.pictureUrl} />
                  <h3>{celebrity.name}</h3>
                  {celebrity.movie.map((movie)=>{
                    
                  })}
                </div>
              );
            })}
        </div>
        <button onClick={getRandomCelebs}>Show 5 Random Celebrities</button>
      </div>
    );
}

export default FiveRandomCelebs;
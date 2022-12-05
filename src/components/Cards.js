import React, {useEffect, useState} from 'react';
import './Cards.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Card from 'react-bootstrap/Card';

function Cards() {
  const [dogs, setDogs] = useState ([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  fetch("/dogs")
    .then((response) => response.json())
    .then((data) => setDogs(data))
    .catch(console.log);
}, [setDogs]);

console.log(dogs)
console.log(setDogs)

function handleClick (index){
  setCurrentIndex(index);
}

return (
  <>
    {dogs.length && (
      <React.Fragment>
      <Card className = "destination-card" body>
      <h1>Take a look at these incredible destinations: </h1>
        <div>
          <div className="destination-info">
          <img src={dogs[currentIndex].src} alt="destination"/>
            <div>
              <h4 className="bold-text">{dogs[currentIndex].label}</h4>
            </div>
            <p className="p-text">{dogs[currentIndex].last_seen}</p>
          </div>
        </div>
        <div className="center-btn">
          <div className="left-btn" onClick={() => handleClick(currentIndex === 0 ? dogs.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>
          <div className="right-btn" onClick={() => handleClick(currentIndex === dogs.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>
        </div>
        </Card>
      </React.Fragment>
    )}
  </>
)}

export default Cards;
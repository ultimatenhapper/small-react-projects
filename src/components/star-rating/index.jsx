import { useState } from 'react';
import {FaStar} from 'react-icons/fa';

import './styles.css';

const StartRating = ({ numOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log('Clicking ' + getCurrentIndex);
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log('Entering '+ getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex){
    console.log('Leaving '+ getCurrentIndex);
    setHover(0);
  }
  return <div className="start-rating">
    {
    [...Array(numOfStars)].map((_, index) => {
      index += 1;
      return <FaStar 
              key={index} 
              className={index <= (hover || rating) ? 'active' : 'inactive'}
              onClick={() => handleClick(index)} 
              onMouseEnter={() => handleMouseEnter(index)} 
              onMouseLeave={() => handleMouseLeave(index)} 
              size={40}
             />
    })}</div>;
};

export default StartRating;
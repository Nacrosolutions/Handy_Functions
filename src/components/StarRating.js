

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Star from "./Star";

const StarRating = ({ totalStar = 5 }) => {


  const [selectedStar, setSelectedStar] = useState(0);
  const createArray = length => [...Array(length)]
  // console.log([...Array[2]])

  return (
    <>
      {createArray(totalStar).map((n, i) => (<Star key={i} selected={selectedStar > i} onSelect={() => setSelectedStar(i + 1)} />))}
      <p>
        {selectedStar} out of {totalStar}
      </p>

    </>

  );


};


export default StarRating;
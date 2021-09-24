import { useState } from "react";
import StarComp from "./StarComp";

const StarLayout = () => {

  const totalStar = 5;

  const [starArr, setStarArr] = useState(0);

  const starArray = length => [...Array(length)];


  // const changeHandler = () => {
  //   console.log(starArr);
  //   setStarArr(i + 1);
  //   console.log(setStarArr)
  // }

  return (
    <div>
      {starArray(totalStar).map((n, i) => <StarComp key={i} selected={starArr > i} onSelect={() => setStarArr(i + 1)} />)}
    </div>

  )
};



export default StarLayout;
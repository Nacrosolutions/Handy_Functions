import { FaStar } from 'react-icons/fa';

const StarComp = (props) => {

  return (
    <FaStar color={props.selected ? "red" : "grey"} onClick={props.onSelect}></FaStar>
  );
}


export default StarComp;
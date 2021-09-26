// import { Link, Router } from 'react-router-dom';
import './Button.css';
const Buttonn = (props) => {

  // return (
  //   // <div>
  //   //   <Router> <Link className="btn btn-white">{props.name}</Link></Router>
  //   // </div>
  //   // return <button type="submit" className="btn btn-white">{props.name}</button>

  // );
  return <a href="/#" className={`btn btn-white ${props.styless}`}>{props.name}</a>

}


export default Buttonn;
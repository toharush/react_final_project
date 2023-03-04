import { Link } from "react-router-dom";
import "./404.css";

const FourOFour = ({ errorNumber }) => {
  return (
    <>
      <h1>{errorNumber}</h1>

      <div class="frame">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="caps">
        <img src="http://ademilter.com/caps.png" alt="" />
      </div>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default FourOFour;

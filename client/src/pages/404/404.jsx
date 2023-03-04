import "./404.css";

const FourOFour = ({ errorNumber }) => {
  return (
    <>
      <h1>{errorNumber}</h1>

      <div className="frame">
        <div />
        <div />
        <div />
      </div>
      <div className="caps" />

      <canvas id="canvas" />
    </>
  );
};

export default FourOFour;

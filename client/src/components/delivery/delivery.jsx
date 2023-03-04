import "./delivery.css";

const Delivery = () => {
  return (
    <div className="container">
      <div className="car-wrapper">
        <div className="car-wrapper_inner">
          <div className="car_outter">
            <div className="car">
              <div className="body">
                <div></div>
              </div>
              <div className="decos">
                <div className="line-bot"></div>
                <div className="door">
                  <div className="handle"></div>
                  <div className="bottom"></div>
                </div>
                <div className="window"></div>
                <div className="light"></div>
                <div className="light-front"></div>
                <div className="antenna"></div>
              </div>
              <div>
                <div className="wheel"></div>
                <div className="wheel"></div>
              </div>
              <div className="wind">
                <div className="p p1"></div>
                <div className="p p2"></div>
                <div className="p p3"></div>
                <div className="p p4"></div>
                <div className="p p5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-stuff">
        <div className="bg">
          <h1 className="title">One Day Delivey</h1>
        </div>
        <div className="bg bg-2"></div>
        <div className="bg bg-3"></div>
        <div className="ground"></div>
      </div>
    </div>
  );
};

export default Delivery;

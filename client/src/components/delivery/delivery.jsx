import "./delivery.css";

const Delivery = () => {
  return (
    <div class="container">
      <div class="car-wrapper">
        <div class="car-wrapper_inner">
          <div class="car_outter">
            <div class="car">
              <div class="body">
                <div></div>
              </div>
              <div class="decos">
                <div class="line-bot"></div>
                <div class="door">
                  <div class="handle"></div>
                  <div class="bottom"></div>
                </div>
                <div class="window"></div>
                <div class="light"></div>
                <div class="light-front"></div>
                <div class="antenna"></div>
              </div>
              <div>
                <div class="wheel"></div>
                <div class="wheel"></div>
              </div>
              <div class="wind">
                <div class="p p1"></div>
                <div class="p p2"></div>
                <div class="p p3"></div>
                <div class="p p4"></div>
                <div class="p p5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="background-stuff">
        <div class="bg">
          <h1 class="title">One Day Delivey</h1>
        </div>
        <div class="bg bg-2"></div>
        <div class="bg bg-3"></div>
        <div class="ground"></div>
      </div>
    </div>
  );
};

export default Delivery;

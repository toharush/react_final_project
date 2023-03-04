import { Link } from "react-router-dom";
import "./404.css";

const FourOFour = ({ errorNumber, errorName, errorMsg }) => {
  return (
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">{errorNumber}</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">{errorName} </h3>

                <p>{errorMsg}</p>

                <Link to="/" class="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourOFour;

import { CardMedia, Radio } from "@mui/material";
import { Link } from "react-router-dom";
import namrToHexColor from "../../../../utils/nameToHexColor";

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 2,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 2,
  cursor: "pointer",
};

const dotsContainerStyles = {
  position: "absolute",
  zIndex: "20",
  bottom: "1%",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, 80%)",
};

const ImageSlider = ({
  slides,
  className,
  currentIndex,
  setCurrentIndex,
  link,
}) => {
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const controlProps = (item) => ({
    checked: currentIndex === item,
    onChange: () => goToSlide(item),
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
    sx: {
      color: namrToHexColor(slides[item].color.name),
      "&.Mui-checked": {
        color: namrToHexColor(slides[item].color.name),
      },
    },
  });

  return (
    <div style={{ position: "relative" }}>
      <Link to={link}>
        <CardMedia
          image={slides[currentIndex].img}
          role="img"
          src={slides[currentIndex].img}
          className={className}
        />
      </Link>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>

      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          //   <div
          //     style={dotStyle}
          //     key={slideIndex}
          //     onClick={() => goToSlide(slideIndex)}
          //   >
          //     ●
          //   </div>
          <Radio {...controlProps(slideIndex)} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

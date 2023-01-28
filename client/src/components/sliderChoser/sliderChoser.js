import "./sliderChoser.css";
import Form from "react-bootstrap/Form";

function SliderChoser({ content }) {
  const { title, options, setChosen, chosen, label } = content;

  return (
    <>
      <form className="options">
        {title} :
        <span className="option mb-3">
          {options.map((option, index) => (
            <Form.Check
              inline
              label={label ? option.name.replace(" : צבע", "") : null}
              checked={chosen == option}
              name={title}
              type={"radio"}
              onClick={() => setChosen(index)}
              id={option}
            />
          ))}
        </span>
      </form>
    </>
  );
}

export default SliderChoser;

import "./sliderChoser.css";
import Form from 'react-bootstrap/Form';

function SliderChoser({ content }) {
    const { title, options, setChosen, chosen, label } = content;

    return (
        <>
            <form className="options">{title} :
                <span className="option mb-3">
                    {options.map((option, index) =>
                        <Form.Check
                            inline
                            label={label ? option : null}
                            className={option}
                            checked={chosen == option}
                            name={title}
                            color={option}
                            type={"radio"}
                            onClick={() => setChosen(option)}
                            id={option}
                        />
                    )}
                </span>
            </form>
        </>
    );
}

export default SliderChoser;
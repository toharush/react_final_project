import "./sliderChoser.css";
import Form from 'react-bootstrap/Form';

function SliderChoser({ content }) {
    const { title, options, setChosen, chosen } = content;

    return (
        <>
            <form className="options">{title} : 
                <span className="option mb-3">
                    {options.map(option =>
                        <Form.Check
                        inline
                            className={option}
                            name={title}
                            color={option}
                            type={"radio"}
                            id={option}
                        />
                    )}
                </span>
            </form>
        </>
    );
}

export default SliderChoser;
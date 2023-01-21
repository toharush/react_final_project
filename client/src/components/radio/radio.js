import "./sliderChoser.css";

function Radio({ title }) {
    const { title, setChosen, chosen } = content;

    return (
        <>
            <div className="options">{title} :
                <span className="option">
                    {options.map(option => <input type={"radio"} value={option} onClick={setChosen} />)}
                </span>
            </div>
        </>
    );
}

export default Radio;
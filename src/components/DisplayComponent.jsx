import './DisplayComponent.css'

const DisplayComponent = ({ text }) => {
    return (
        <div className="display">
            <sub>{text}</sub>
        </div>
    );
};

export default DisplayComponent;
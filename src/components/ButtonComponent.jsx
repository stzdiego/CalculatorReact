import './ButtonComponent.css'

const ButtonComponent = ({ text, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonComponent;
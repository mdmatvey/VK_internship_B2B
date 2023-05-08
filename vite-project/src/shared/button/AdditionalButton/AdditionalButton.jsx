import PropTypes from 'prop-types';
import '../styles/styles.css'
import './styles/styles.css'

const AdditionalButton = ({ buttonType, buttonAction, buttonText }) => {
    return (  
        <button type={buttonType} onClick={(e) => {
            e.preventDefault()
            buttonAction()
        }}>
            {buttonText}
        </button>
    );
}

AdditionalButton.propTypes = {
    buttonType: PropTypes.string, 
    buttonAction: PropTypes.func,
    buttonText: PropTypes.string
};
 
export default AdditionalButton;
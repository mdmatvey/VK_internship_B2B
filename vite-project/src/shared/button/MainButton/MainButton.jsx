import PropTypes from 'prop-types';
import '../styles/styles.css'
import './styles/styles.css'

const MainButton = ({ buttonType, buttonAction, buttonText }) => {
    return (  
        <button type={buttonType} onClick={(e) => {
            if (buttonType !== 'submit') {
                buttonAction()
            }
        }}>
            {buttonText}
        </button>
    );
}

MainButton.propTypes = {
    buttonType: PropTypes.string,
    buttonAction: PropTypes.func,
    buttonText: PropTypes.string
};
 
export default MainButton;
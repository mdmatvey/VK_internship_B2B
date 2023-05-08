import PropTypes from 'prop-types';
import { MainButton } from "../../../shared"

const SubmitButton = ({ buttonType, buttonAction, buttonText }) => {
    return (  
        <MainButton buttonType={buttonType} buttonAction={buttonAction} buttonText={buttonText} />
    );
}

SubmitButton.propTypes = {
    buttonType: PropTypes.string,
    buttonAction: PropTypes.func,
    buttonText: PropTypes.string
};
 
export default SubmitButton;
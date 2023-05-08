import PropTypes from 'prop-types';
import { AdditionalButton } from "../../../shared"

const ClearButton = ({ buttonType, buttonAction, buttonText }) => {
    return (  
        <AdditionalButton buttonType={buttonType} buttonAction={buttonAction} buttonText={buttonText} />
    );
}

ClearButton.propTypes = {
    buttonType: PropTypes.string,
    buttonAction: PropTypes.func,
    buttonText: PropTypes.string
};
 
export default ClearButton;
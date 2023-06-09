import PropTypes from 'prop-types';
import { TypedInput } from "../../../entities";

const TimeInput = ({ inputValue, inputAction }) => {
    
    return (  
        <TypedInput 
            inputLabel={'Время'} 
            inputRequired={true}
            inputType={'time'}
            inputValue={inputValue}
            inputPlaceholder={'время'}
            inputOnChange={inputAction}
            storeField={'Time'}
        />
    );
}
 
TimeInput.propTypes = {
    inputValue: PropTypes.string,
    inputAction: PropTypes.func
};

export default TimeInput;
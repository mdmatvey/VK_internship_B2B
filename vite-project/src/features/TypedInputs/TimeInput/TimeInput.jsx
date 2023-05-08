import PropTypes from 'prop-types';
import { TypedInput } from "../../../entities";

const TimeInput = ({ inputValue, inputAction }) => {
    
    return (  
        <TypedInput 
            inputLabel={'Время'} 
            inputType={'time'}
            inputValue={inputValue}
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
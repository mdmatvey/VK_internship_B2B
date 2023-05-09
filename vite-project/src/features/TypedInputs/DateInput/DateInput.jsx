import PropTypes from 'prop-types';
import { TypedInput } from "../../../entities";

const DateInput = ({ inputValue, inputAction }) => {
    
    return (  
        <TypedInput 
            inputLabel={'Дата'} 
            inputType={'date'}
            inputValue={inputValue}
            inputPlaceholder={'дату'}
            inputOnChange={inputAction}
            storeField={'Date'}
        />
    );
}

DateInput.propTypes = {
    inputValue: PropTypes.string,
    inputAction: PropTypes.func
};

export default DateInput;
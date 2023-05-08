import PropTypes from 'prop-types';
import '../styles/styles.css'

const TypedInput = ({inputLabel, inputType, inputValue, inputOnChange, storeField}) => {
    return (  
        <label>
            {inputLabel}
            <input type={inputType} value={inputValue} onChange={(e) => inputOnChange(e.target.value, storeField)} required />
        </label>
    );
}

TypedInput.propTypes = {
    inputLabel: PropTypes.string,
    inputType: PropTypes.string,
    inputValue: PropTypes.string, 
    inputOnChange: PropTypes.func, 
    storeField: PropTypes.string
};
 
export default TypedInput;
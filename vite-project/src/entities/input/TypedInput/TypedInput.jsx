import PropTypes from 'prop-types';
import '../styles/styles.css'

const TypedInput = ({inputLabel, inputRequired, inputType, inputValue, inputPlaceholder, inputOnChange, storeField}) => {
    return (  
        <label>
            {inputLabel}{inputRequired && '*' }:
            <input type={inputType} value={inputValue} placeholder={`Введите ${inputPlaceholder}`} onChange={(e) => inputOnChange(e.target.value, storeField)} required={inputRequired} />
        </label>
    );
}

TypedInput.propTypes = {
    inputLabel: PropTypes.string,
    inputRequired: PropTypes.bool,
    inputType: PropTypes.string,
    inputValue: PropTypes.string, 
    inputPlaceholder: PropTypes.string,
    inputOnChange: PropTypes.func, 
    storeField: PropTypes.string
};
 
export default TypedInput;
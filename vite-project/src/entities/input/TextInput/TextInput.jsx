import PropTypes from 'prop-types';
import '../styles/styles.css'

const TextInput = ({inputLabel, inputRequired, inputValue, inputPlaceholder, inputOnChange, storeField}) => {
    return (  
        <label>
            {inputLabel}{inputRequired && '*' }:
            <textarea value={inputValue} placeholder={inputPlaceholder} onChange={(e) => inputOnChange(e.target.value, storeField)} required={inputRequired} />
        </label>
    );
}

TextInput.propTypes = {
    inputLabel: PropTypes.string,
    inputRequired: PropTypes.bool,
    inputValue: PropTypes.string, 
    inputPlaceholder: PropTypes.string,
    inputOnChange: PropTypes.func,
    storeField: PropTypes.string 
};

export default TextInput;
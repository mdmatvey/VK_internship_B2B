import PropTypes from 'prop-types';
import '../styles/styles.css'

const TextInput = ({inputLabel, inputValue, inputOnChange, storeField}) => {
    return (  
        <label>
            {inputLabel}:
            <textarea value={inputValue} onChange={(e) => inputOnChange(e.target.value, storeField)} />
        </label>
    );
}

TextInput.propTypes = {
    inputLabel: PropTypes.string,
    inputValue: PropTypes.string, 
    inputOnChange: PropTypes.func,
    storeField: PropTypes.string 
};

export default TextInput;
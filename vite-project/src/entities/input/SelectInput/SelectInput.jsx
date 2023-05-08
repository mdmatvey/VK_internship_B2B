import PropTypes from 'prop-types';
import '../styles/styles.css'

const SelectInput = ({inputLabel, inputValue, inputOnChange, storeField, inputOptions}) => {
    return (  
        <label>
            {inputLabel}:
            <select value={inputValue} onChange={(e) => inputOnChange(e.target.value, storeField)} required>
                {
                    inputOptions.map((option, index) => 
                        <option value={option} key={index}>{option}</option>
                    )
                }
            </select>
        </label>
    );
}

SelectInput.propTypes = {
    inputLabel: PropTypes.string,
    inputValue: PropTypes.string, 
    inputOnChange: PropTypes.func, 
    storeField: PropTypes.string,
    inputOptions: PropTypes.array
};
 
export default SelectInput;
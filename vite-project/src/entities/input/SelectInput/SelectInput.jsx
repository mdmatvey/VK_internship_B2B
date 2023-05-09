import PropTypes from 'prop-types';
import '../styles/styles.css'

const SelectInput = ({inputLabel, inputRequired, inputValue, inputOnChange, storeField, inputOptions}) => {
    return (  
        <label>
            {inputLabel}{inputRequired && '*' }:
            <select value={inputValue} onChange={(e) => inputOnChange(e.target.value, storeField)} required={inputRequired}>
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
    inputRequired: PropTypes.bool,
    inputValue: PropTypes.string, 
    inputOnChange: PropTypes.func, 
    storeField: PropTypes.string,
    inputOptions: PropTypes.array
};
 
export default SelectInput;
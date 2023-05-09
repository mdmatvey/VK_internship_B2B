import PropTypes from 'prop-types';
import { SelectInput } from "../../../entities";

const FloorSelection = ({ inputValue, inputAction }) => {
    const floors = Array.from({ length: 23 }, (_, i) => i + 3)
    floors.unshift('Выберите этаж')
        
    return (  
        <SelectInput
            inputLabel={'Этаж'}
            inputRequired={true}
            inputValue={inputValue}
            inputOnChange={inputAction}
            storeField={'Floor'}
            inputOptions={floors}
        />
    );
}

FloorSelection.propTypes = {
    inputValue: PropTypes.string,
    inputAction: PropTypes.func,
};
 
export default FloorSelection;
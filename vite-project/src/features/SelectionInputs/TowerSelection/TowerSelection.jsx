import PropTypes from 'prop-types';
import { SelectInput } from "../../../entities";

const TowerSelection = ({ inputValue, inputAction }) => {
    const towers = [ 'A', 'B' ]
    towers.unshift('Выберите этаж')

    return (  
        <SelectInput
            inputLabel={'Башня'}
            inputRequired={true}
            inputValue={inputValue}
            inputOnChange={inputAction}
            storeField={'Tower'}
            inputOptions={towers}
        />
    );
}

TowerSelection.propTypes = {
    inputValue: PropTypes.string,
    inputAction: PropTypes.func
};
 
export default TowerSelection;
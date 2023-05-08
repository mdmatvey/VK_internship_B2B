import PropTypes from 'prop-types';
import { SelectInput } from "../../../entities";

const IntercomSelection = ({ inputValue, inputAction }) => {
    const intercoms = Array.from({ length: 10 }, (_, i) => i + 1)
    intercoms.unshift('Выберите переговорную')

    return (  
        <SelectInput
            inputLabel={'Переговорная'}
            inputValue={inputValue}
            inputOnChange={inputAction}
            storeField={'Intercom'}
            inputOptions={intercoms}
        />
    );
}

IntercomSelection.propTypes = {
    inputValue: PropTypes.string,
    inputAction: PropTypes.func,
};
 
export default IntercomSelection;
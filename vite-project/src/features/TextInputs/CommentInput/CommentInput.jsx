import PropTypes from 'prop-types';
import { TextInput } from "../../../entities";

const CommentInput = ({ inputValue, inputAction }) => {
    
    return (  
        <TextInput
            inputLabel={'Комментарий'} 
            inputValue={inputValue}
            inputPlaceholder={'Введите комментарий (необязательно)'}
            inputOnChange={inputAction}
            storeField={'Comment'}
        />
    );
}

CommentInput.propTypes = {
    inputValue: PropTypes.string,
    inputAction: PropTypes.func,
};
 
export default CommentInput;
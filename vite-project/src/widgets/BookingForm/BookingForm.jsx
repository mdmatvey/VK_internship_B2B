import { observer } from 'mobx-react-lite'
import { ClearButton, CommentInput, DateInput, FloorSelection, IntercomSelection, SubmitButton, TimeInput, TowerSelection } from "../../features";
import './styles/styles.css'
import { Context } from '../../pages/Booking/Booking';
import { useContext, useState } from 'react';
import { ColorfulBackground } from '../../shared';

const BookingForm = observer(() => {
    const { bookingform } = useContext(Context)

    const [messageText, setMessageText] = useState('')
    const [messageVisibility, setMessageVisibility] = useState('hidden')
    const [messageOpacity, setMessageOpacity] = useState(0)
    const [messageColor, setMessageColor] = useState('')

    const inputAction = (etarget, storeTarget) => {
        bookingform['set' + storeTarget](etarget)
    }

    const descriptors = Object.getOwnPropertyDescriptors(bookingform)
    const clearInputs = () => {
        for (const property in descriptors) {
            bookingform['set' + property.substring(0, 1).toUpperCase() + property.substring(1, property.length)]('')
        }
    }

    const displayMessage = (success) => {
        setMessageText(success ? 'Спасибо за ваш ответ!' : 'Заполните обязательные поля')
        setMessageColor(success? 'green' : 'red')
        setMessageVisibility('visible')
        setMessageOpacity(1)
        setTimeout(() => {
            setMessageOpacity(0)
            setMessageVisibility('hidden')
            setMessageText('')
            setMessageColor('')
        }, '3000');
    }

    const sendData = (e) => {
        e.preventDefault()

        if (
            bookingform.tower &&
            bookingform.floor &&
            bookingform.intercom &&
            bookingform.date &&
            bookingform.time
        ) {
            const formData = {
                    tower: bookingform.tower,
                    floor: bookingform.floor,
                    intercom: bookingform.intercom,
                    date: bookingform.date,
                    time: bookingform.time,
                    comment: bookingform.comment,
                };

            console.log(JSON.stringify(formData));

            displayMessage(true)

            clearInputs()
        } else {
            displayMessage(false)
        }
    }

    return ( 
        <>
            <div className="booking-form-wrapper">
                <form className="booking-form" onSubmit={(e) => sendData(e)}>
                    <TowerSelection inputValue={bookingform.tower} inputAction={inputAction} />
                    <FloorSelection inputValue={bookingform.floor} inputAction={inputAction} />
                    <IntercomSelection inputValue={bookingform.intercom} inputAction={inputAction} />
                    <DateInput inputValue={bookingform.date} inputAction={inputAction} />
                    <TimeInput inputValue={bookingform.time } inputAction={inputAction} />
                    <CommentInput inputValue={bookingform.comment} inputAction={inputAction} /> 
                    <div className="bottom-wrapper">
                        <span id="submit-message" style={{ visibility: messageVisibility, opacity: messageOpacity, color: messageColor }}>{messageText}</span>
                        <div className="buttons-wrapper">
                            <ClearButton buttonType={'button'} buttonAction={clearInputs} buttonText={'Очистить'} />
                            <SubmitButton buttonType={'submit'} buttonText={'Отправить'} />
                        </div>
                    </div>
                </form>
            </div>
            <ColorfulBackground />
        </>
    );
})
 
export default BookingForm;
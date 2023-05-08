import { observer } from 'mobx-react-lite'
import { ClearButton, CommentInput, DateInput, FloorSelection, IntercomSelection, SubmitButton, TimeInput, TowerSelection } from "../../features";
import './styles/styles.css'
import { Context } from '../../pages/Booking/Booking';
import { useContext } from 'react';
import { ColorfulBackground } from '../../shared';

const BookingForm = observer(() => {
    const { bookingform } = useContext(Context)

    const inputAction = (etarget, storeTarget) => {
        bookingform['set' + storeTarget](etarget)
    }

    const descriptors = Object.getOwnPropertyDescriptors(bookingform)
    const clearInputs = () => {
        for (const property in descriptors) {
            bookingform['set' + property.substring(0, 1).toUpperCase() + property.substring(1, property.length)]('')
        }
    }

    const sendData = (e) => {
        e.preventDefault()
        
        const formData = {
                tower: bookingform.tower,
                floor: bookingform.floor,
                intercom: bookingform.intercom,
                date: bookingform.date,
                time: bookingform.time,
                comment: bookingform.comment,
            };

        console.log(JSON.stringify(formData));

        clearInputs()
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
                    <div className="buttons-wrapper">
                        <ClearButton buttonType={'button'} buttonAction={clearInputs} buttonText={'Очистить'} />
                        <SubmitButton buttonType={'submit'} buttonText={'Отправить'} />
                    </div>
                </form>
            </div>
            <ColorfulBackground />
        </>
    );
})
 
export default BookingForm;
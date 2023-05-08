import { createContext } from 'react'
import { BookingForm } from "../../widgets";
import BookingFormStore from './store/store';

export const Context = createContext(null)

const Booking = () => {
    return ( 
        <Context.Provider value={{
            bookingform: new BookingFormStore()
          }}>
            <BookingForm />
        </Context.Provider>
    );
}
 
export default Booking;
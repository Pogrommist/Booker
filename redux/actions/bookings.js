import { fetchBookings, deleteBooking } from '../../services/api/bookings'
import { FETCH_BOOKINGS_SUCCESS, DELETE_BOOKING_SUCCESS } from '../../services/constants'

export function fetchBookingsAction () {
	return (dispatch, getState) => {
		headers = getState().auth.token
		fetchBookings(headers)
			.then(res => {
				dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: res.data})
			})
    }
}

export function destroyBooking (id) {
	return dispatch => {
		deleteBooking(id)
			.then(() => dispatch({ type: DELETE_BOOKING_SUCCESS, payload: id}))
	}
}
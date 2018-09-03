import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import bookings from './bookings'
import auth from './auth'

export const rootReducer = combineReducers({
	form: formReducer,
	bookings,
	auth
})
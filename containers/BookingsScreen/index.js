import React from 'react';
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Header } from '../../components/shared/Header'
import { BookingsEntityScreen } from '../../components/BookingsEntityScreen'
import { fetchBookingsAction, destroyBooking } from '../../redux/actions/bookings'

class BookingsScreen extends React.Component {
		componentDidMount () {
			setTimeout(() => {
				this.props.onFetchBookingsAction()
			}, 1000)
		}
		
		handleAddBooking = () => {
				this.props.navigation.navigate('BookingCreateScreen')
				
		}
	render() {
		const { bookings, onDestroyBooking, user } = this.props
		return (
			<View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
				<Header/>
				<View style={{flex: 2, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
										<View style={{flex: 3, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor: 'green', width: 300}}>
												<Text>My bookings</Text>
												<TouchableOpacity onPress={this.handleAddBooking}>
														<Text>+ Add</Text>
												</TouchableOpacity>
										</View>
										{bookings.map(booking => <BookingsEntityScreen 
											booking={booking} 
											key={booking.id}
											onDestroy={onDestroyBooking}
											id={booking.id}
										/>)}
									
				</View>
				
			</View>
		);
	}
}

const mapStateToProps = state => ({
	bookings: state.bookings, 
	headers: state.auth.token,
	bookingsStore: state,
	user: state.auth

})

const mapDispatchToProps = dispatch => ({
	onFetchBookingsAction () { return dispatch(fetchBookingsAction())},
	onDestroyBooking (id) { return dispatch(destroyBooking(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingsScreen)
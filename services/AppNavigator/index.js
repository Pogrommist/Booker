import { createStackNavigator } from 'react-navigation'
import { RegistrationScreen } from '../../components/RegistrationScreen'
import { BookingShowScreen } from '../../components/BookingShowScreen'
import { BookingCreateScreen } from '../../components/BookingCreateScreen'
import BookingsScreen from '../../containers/BookingsScreen'
import AuthScreen from '../../containers/AuthScreen'

const AppNavigator = createStackNavigator({
  Home: { screen: AuthScreen },
  RegistrationScreen: { screen: RegistrationScreen},
  BookingsScreen: { screen: BookingsScreen},
  BookingShowScreen: { screen: BookingShowScreen},
  BookingCreateScreen: { screen: BookingCreateScreen}
});

export default AppNavigator

import React from 'react';
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Form from '../../components/shared/Form'
import { Header } from '../../components/shared/Header'
import { signInAction } from '../../redux/actions/auth'

class AuthScreen extends React.Component {

	handleLogin = data => {
		this.props.onSignInAction(data)
		this.props.navigation.navigate('BookingsScreen')
	}

  render() {
    return (
			<View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
				<Header/>
				<View style={{flex: 2, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
					<Text>Login</Text>
					<Form onSubmit={this.handleLogin} submitText='Go!'/>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('RegistrationScreen')}>
						<Text>SignUp</Text>
					</TouchableOpacity>
				</View>
				
			</View>
    );
  }
}

const mapStateToProps = state => ({
	user: state.auth,
	store: state
})

const mapDispatchToProps = dispatch => ({
	onSignInAction(data) { return dispatch(signInAction(data)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)
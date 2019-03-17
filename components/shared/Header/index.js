import React from 'react';
import { View, Image, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import logo from '../../../logo.png'

export class Header extends React.Component {

  render() {
    return (
			<View>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<Image source={logo} style={styles.image}/>
			</TouchableWithoutFeedback>
			</View>
			
    );
  }
}

const styles = StyleSheet.create({
  image: {
		flex: 0,
		borderRadius: 200,
		height: 100, 
		width: 100
	}

});

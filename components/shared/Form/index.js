import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { emailRegex } from '../../../services/constants'

import FormTextInput from '../FormTextInput'

function Form(props) {
  const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed',];
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={{flex: 1, width: 200, alignItems: 'center' }}>
      <Text style={{textAlign: 'center'}}>Email</Text>
			<Field
        name={'email'}
				component={FormTextInput}
				placeholder='Email'
				style={styles.field}
				underlineColorAndroid="transparent"
			/>
			<Text style={{textAlign: 'center'}}>Password</Text>
      <Field
        name={'password'}
				component={FormTextInput}
				secureTextEntry={true}
				placeholder='Password'
				style={styles.field}
				underlineColorAndroid="transparent"
			/>
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={{textAlign: 'center', backgroundColor: 'black', color: 'white', width: 100, borderRadius: 10, padding: 10}}>{props.submitText}!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  field: {
		height: 40, 
		width: 200, 
		borderColor: '#000', 
		borderWidth: 2, 
		borderRadius: 10,  
		fontSize: 18,
		padding: '2%',
		alignSelf: 'stretch'
	},
	contentContainer: {
		// flex: 1,
	}
});

export default reduxForm({ form: 'signIn' })(Form);
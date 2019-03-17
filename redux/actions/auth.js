import { signUp, signIn, validateToken } from '../../services/api/auth'
import { ON_SUCCESS_LOGIN, UPDATE_ACCESS_TOKEN } from '../../services/constants'

export function signUpAction (data) {
    return signUp(data)
            .then(res => {
                console.log('response', res.headers)
            })
            .catch(error => console.log('error', error))
    
}

// export function signInAction (data) {
//     return signIn(data)
//         // .then(res => console.log('res', res.data))
//         .then(res => res)
//             // .then(res => dispatch({type: LOGIN_USER_SUCCESS, payload: res.data}))
//             .catch(error => console.log('error', error))
    
// }

export function signInAction (data) {
    return dispatch => {
        signIn(data)
            .then(res => {
                const accessToken = res.headers
                dispatch({type: ON_SUCCESS_LOGIN, payload: { user: res.data, accessToken }})
            })
            .catch(error => {
                console.log("ERROR DURING TOKEN VALIDATION", error);
            })
    }
    
}

export function updateAccessToken(new_token) {
	return {
	  type: UPDATE_ACCESS_TOKEN,
	  payload: {new_token},
	}
}
//Auth Component Helpers
//=================================================
//Dependencies
import AsyncStorage from '@react-native-community/async-storage';


//helper to check if user is logged in
const authHelpers = {
    // splitToken(token) {
    //     return (JSON.parse(window.atob(token.split('.')[1])));
    // },
    getToken() {
        return localStorage.getItem('token');

    },
    // getUserData(token) {
    //     return privateHelpers.splitToken(token);

    // },
    // payload() {

    //     localStorage.getItem('token')
    //     //get token
    //     let token = privateHelpers.getToken();
    //     //split token
    //     //pull user data from token
    //     const userData = privateHelpers.getUserData(token);
    //     return (userData);
    // },
    // isLoggedIn() {
    //     let token = localStorage.getItem('token');

    //     if (token != null) {
    //         const userData = privateHelpers.splitToken(token);

    //         if (userData.exp > Date.now() / 1000) {
    //             return true
    //         }
    //         else {
    //             localStorage.removeItem('token');
    //             return false
    //             // remove token from local storage

    //         }
    //     }
    // },
    logout() {
        AsyncStorage.removeItem('@token')
    }

}



module.exports = privateHelpers;
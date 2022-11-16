import { logout, checkAuth } from '../fetch-utils.js';
// use checkAuth function to redirect is user not authenticated
window.addEventListener('load', () => {
    checkAuth();
});
// add event listener to the logout button and call logout
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    logout();
});

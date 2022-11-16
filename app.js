import { signUpUser, signInUser, checkAuth, redirectIfLoggedIn, logout } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        redirectIfLoggedIn();
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        redirectIfLoggedIn();
    }
});

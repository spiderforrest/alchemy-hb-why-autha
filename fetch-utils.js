// Enter Supabase Information
const SUPABASE_URL = 'https://njqdydcjmajdjmyztzov.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qcWR5ZGNqbWFqZGpteXp0em92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMjAsImV4cCI6MTk4MzY4NDAyMH0.r6bSNSp-6Ts4GRV3-pnwjFMUWdUGlWU4EiIWbDqrTXU';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}

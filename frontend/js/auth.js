export function setupAuth() {
    const token = localStorage.getItem('token');
    if (!token && !window.location.pathname.includes('login')) {
        window.location.href = '/login';
    }
}

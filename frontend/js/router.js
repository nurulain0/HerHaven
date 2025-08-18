export function initRouter() {
    const routes = {
        '/': 'pages/dashboard.html',
        '/login': 'pages/auth/login.html'
    };

    window.addEventListener('popstate', loadRoute);
    document.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            loadRoute();
        }
    });

    async function loadRoute() {
        const path = window.location.pathname;
        const html = await fetch(routes[path] || routes['/']).then(res => res.text());
        document.getElementById('app').innerHTML = html;
    }

    loadRoute();
}

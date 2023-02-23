export default defineNuxtRouteMiddleware((to, from) => {
    const userTokenCookie = useCookie('token');
    const token = userTokenCookie.value;
    if (token) {
    } else {
        return navigateTo('/login');
    }
})

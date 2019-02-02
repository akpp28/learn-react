import config from "../config";

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return {'Authorization': `${config.jwtAuthHeaderPrefix} ${user.token}`};
    } else {
        return {};
    }
}
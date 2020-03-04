import { rpost, rget } from "../../utils/request";

export function login(data) {
    return rpost("/user/login", "LOGIN", data);
}

export function register(data) {
    return rpost("/user/register", "REGISTER", data);
}

export function logged(data) {
    return rpost("/user/logged", "LOGIN", data);
}

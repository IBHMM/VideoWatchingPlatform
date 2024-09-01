
export const SetTokenToLocalStorage = (token, name) => {
    localStorage.setItem(name, token);
}

export const TakeTokenFromLocalStorage = (name) => {
    return localStorage.getItem(name);
}

export const RemoveTokenFromLocalStorage = (name) => {
    localStorage.removeItem(name);
}

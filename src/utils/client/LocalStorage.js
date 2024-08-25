
export const SetTokenToLocalStorage = (token) => {
    const newtoken = "uasdasf_" + token + "_fsdohfiauosbnvio";
    localStorage.setItem("asdfgh", newtoken);
}

export const TakeTokenFromLocalStorage = () => {
    const token = localStorage.getItem("asdfgh");
    if (token) {
        return token.split("_")[1];
    }
    return null;
}
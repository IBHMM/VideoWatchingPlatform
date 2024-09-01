
export const SetTokenToCookie = (token) => document.cookie = `refreshToken=${token}; path=/; secure; samesite=strict`;

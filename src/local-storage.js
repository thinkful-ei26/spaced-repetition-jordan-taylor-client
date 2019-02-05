export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

// export const saveServerResponse = response => {
//     try {
//         localStorage.setItem('serverResponse', response);
//     } catch (e) {}
// };

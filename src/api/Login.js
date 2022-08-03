import baseUrl from "./baseUrl/baseUrl";

const LoginAPI = async (email, password) => {
    const response = await fetch(baseUrl + '/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    return await response.json();
}

export default LoginAPI;
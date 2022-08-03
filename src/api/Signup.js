import baseUrl from "./baseUrl/baseUrl";

const SignupUserAPI = async (firstName, lastName, email, password) => {
    const response = await fetch(baseUrl + '/signup', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password
        })
    });

    return response.json();
}

export default SignupUserAPI;
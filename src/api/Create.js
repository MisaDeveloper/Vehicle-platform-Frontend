import baseUrl from "./baseUrl/baseUrl";

const CreateAPI = async (token, name, brand, carYear, description, price, userId) => {
    const response = await fetch(baseUrl + '/create', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify({
            name,
            brand,
            carYear,
            description,
            price,
            userId
        })
    });

    return await response.json();
}

export default CreateAPI;
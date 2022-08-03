import baseUrl from "./baseUrl/baseUrl";

export const GetVehicleToUpdateAPI = async (token, vehicleId) => {
    const response = await fetch(baseUrl + '/update/' + vehicleId, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': token
        }
    });

    return await response.json();
}

export const UpdateAPI = async (token, name, brand, carYear, description, price, vehicleId) => {
    const response = await fetch(baseUrl + '/update/' + vehicleId, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify({
            name,
            brand,
            carYear,
            description,
            price
        })
    });

    return await response.json();
}
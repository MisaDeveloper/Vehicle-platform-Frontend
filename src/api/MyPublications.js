import baseUrl from "./baseUrl/baseUrl";

export const GetUserVehiclesAPI = async (token, id) => {
    const response = await fetch(baseUrl + '/mypublications/' + id, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': token
        }
    });

    return await response.json();
}

export const DeleteVehicleAPI = async (token, vehicleId) => {
    const response = await fetch(baseUrl + '/delete/' + vehicleId, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': token
        }
    });

    return await response.json();
}
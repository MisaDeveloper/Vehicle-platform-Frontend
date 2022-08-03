import baseUrl from "./baseUrl/baseUrl";

export const GetAllVehiclesAPI = async (token) => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': token
        }
    });

    return await response.json();
}

export const SearchVehiclesAPI = async (textString) => {
    const response = await fetch(baseUrl + '/search/' + textString, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    return await response.json();
}
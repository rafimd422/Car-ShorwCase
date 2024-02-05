import axios from "axios";

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '0b5cc00c89mshfba49238494bf14p10722ejsn1bcab7b85a53',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    try {
        const response = await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
            headers: headers
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

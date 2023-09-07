
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
        // 'X-Api-Key' : `${process.env.X_RapidAPI_Key}`,
        'X-RapidAPI-Host': 'ccars-by-api-ninjas.p.rapidapi.com'
      }
    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", {
        method: 'GET',
        headers: headers, 
    });
    const result = await response.json();
    console.log(result)
    return result;

}
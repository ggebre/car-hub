
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'b7e42ffab1msh959a1796893f0c3p164d85jsnf5e3e04c1188',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", {
        headers: headers, 
    });
    const result = await response.json();

    return result;

}
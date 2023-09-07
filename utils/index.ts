
export async function fetchCars() {
    // const headers = {
    //     'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
    //     // 'X-Api-Key' : `${process.env.X_RapidAPI_Key}`,
    //     'X-RapidAPI-Host': 'ccars-by-api-ninjas.p.rapidapi.com'
    //   }
    // const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", {
    //     method: 'GET',
    //     headers: headers, 
    // });
    // const result = await response.json();
    // console.log(result)
    // return result;

    return [{
        city_mpg: 20,
        class: "luxury",
        combination_mpg: 21,
        cylinders: 6,
        displacement: 10,
        drive: "FWD",
        fuel_type: "regular",
        highway_mpg: 35,
        make: "Toyota",
        model: "camry",
        transmission: "a",
        year: 1990,
    }]

}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}
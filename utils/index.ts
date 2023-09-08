import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
        method: 'GET',
        headers: headers, 
    });
    const result = await response.json();
    
    return result;

    // return [{
    //     city_mpg: 20,
    //     class: "luxury",
    //     combination_mpg: 21,
    //     cylinders: 6,
    //     displacement: 10,
    //     drive: "FWD",
    //     fuel_type: "regular",
    //     highway_mpg: 35,
    //     make: "Toyota",
    //     model: "camry",
    //     transmission: "a",
    //     year: 1990,
    // }]

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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    // sign up for paid developer account  https://www.imagin.studio/car-image-api to get different types of cars
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`
}
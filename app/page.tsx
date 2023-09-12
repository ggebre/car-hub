'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from '@/components'
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/constants';

export default  function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, useManufacturer] = useState('');
  const [year, useYear] = useState(2022);
  const [fuel, useFuel] = useState('');
  const [limit, useLimit] = useState(10);
  const [model, useModel] = useState('');

  
  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({ manufacturer, year ,fuel,limit,model});
      
      setAllCars(result) 
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    
    getCars();
  }, [manufacturer, year, fuel, limit, model])
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0 || !allCars;
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the Cars you like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ?
        (<section>
          <div className='home__cars-wrapper'>
          {allCars?.map((car) => (
            <CarCard car={car} />
          ))}
          </div>
          <ShowMore 
            pageNumber={(limit || 10) / 10}
            isNext={(limit || 10) > allCars.length}/>
        </section>) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              Oops no results
            </h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  )
}

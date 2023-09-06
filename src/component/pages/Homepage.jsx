import React from 'react';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const { weather, isLoading } = useSelector((state) => state.weather);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <section className="px-40 text-2xl">
      <h1 className="mb-5">Countries</h1>
      <div className="flex justify-between flex-wrap w-full">
        {weather.map((list) => (
          <div key={list.name} className="text-center text-white">
            <div className="bg-blue-700 p-5 rounded-xl drop-shadow-xl">
              <img src="/images/cloud.png" width={150} alt="Cloud" />
              <p className="mb-2">
                {list.main.temp}
                {' '}
                °C
              </p>
              <h1 className="uppercase">{list.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Homepage;

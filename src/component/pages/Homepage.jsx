import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import countriesFlag, { world } from '../../images';

const Homepage = () => {
  const [search, setSearch] = useState('');
  const { weather, isLoading } = useSelector((state) => state.weather);

  if (isLoading) {
    return (
      <div className="text-white text-center text-3xl align-middle pt-10">
        <p>Loading...</p>
      </div>
    );
  }
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = weather.filter((data) => {
    const country = data.name.toLowerCase();
    const find = search.toLowerCase();
    return country.includes(find);
  });

  return (
    <section className="text-2xl">
      <div className="second-color relative py-5 flex justify-between px-5">
        <input type="search" value={search} name="search" placeholder="Search by country name" onChange={(e) => handleChange(e)} />
        <p className="text-white uppercase">
          Weather view
        </p>
      </div>
      <div className="text-white items-center flex justify-around py-20 px-5">
        <img src={world} width={200} alt="" />
        <h2 className="text-white text-3xl font-extrabold text-lg tracking-wide text-center my-2 px-4 align-bottom uppercase">
          Weather
          <br />
          World
        </h2>
      </div>
      <hr />
      <h1 className="text-white text-lg tracking-wide my-2 px-4 align-bottom uppercase">Weather by Country</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {filtered.map((list, index) => {
          let className;
          if (index % 3 === 0) {
            className = 'first-color';
          } else if (index % 3 === 1) {
            className = 'second-color';
          } else {
            className = 'third-color';
          }

          return (
            <div key={list.name} className="text-white">
              <Link to={`/city/${list.name}`}>
                <div className={className}>
                  <div className="p-4 relative flex flex-col justify-between h-72">
                    <div>
                      {countriesFlag[list.name] && (
                        <img
                          src={countriesFlag[list.name]}
                          alt={list.name}
                          width={120}
                        />
                      )}
                      <img className="absolute top-4 right-4" width={30} src="https://img.icons8.com/ios/50/ffffff/circled-right.png" alt="Cloud" />
                    </div>
                    <div className="align-bottom">
                      <h1 className="uppercase mt-10 text-lg text-right">{list.name}</h1>
                      <p className="my-2 text-right text-sm">
                        <span>Temp </span>
                        {Math.round(list.main.temp)}
                        {' '}
                        °C
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Homepage;

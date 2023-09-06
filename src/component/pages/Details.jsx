import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { weatherForSelectCrountry } from '../../redux/weather/weatherSlice';
import countriesFlag from '../../images';

const Details = () => {
  const { cityName } = useParams();
  const selectedCountry = useSelector((state) => weatherForSelectCrountry(state, cityName));

  return (
    <div className=" text-white text-2xl">
      {selectedCountry && <CountryDetails weatherData={selectedCountry} />}
    </div>
  );
};

const CountryDetails = ({ weatherData }) => {
  const {
    id,
    name,
    main,
    wind,
    weather,
  } = weatherData;
  return (
    <div key={id}>
      <div className="second-color relative py-5">
        <Link to="/" className="absolute left-4 font-bold text-white">
          <img
            src="https://img.icons8.com/windows/32/ffffff/back.png"
            alt="forward"
          />
        </Link>
        <p className="text-center uppercase">
          {name}
          {' '}
          Weather view
        </p>
      </div>
      <div className="text-white flex flex-col py-20 px-5">
        <div className="flex justify-around mb-10 items-center">
          {countriesFlag[name] && (
            <img
              src={countriesFlag[name]}
              alt={name}
              width={150}
            />
          )}
          <h2 className="text-white text-xl font-extrabold sm:text-5xl tracking-wide text-center my-2 px-4 align-bottom uppercase">{name}</h2>
        </div>
        <div className="uppercase text-center align-bottom text-pink-800">
          {weather[0].description}
        </div>
      </div>
      <hr />
      <h2 className="py-2 px-4 first-color uppercase">City/Town Breackdown - 2023</h2>
      <div className="text-lg">
        <div className="py-5 second-color">
          <p className="flex px-5 justify-between">
            <span>Temperature: </span>
            {Math.round(main.temp)}
            {' '}
            °C
          </p>
        </div>
        <div className="py-5 first-color">
          <p className="flex px-5 justify-between">
            <span>Wind Speed: </span>
            {Math.round(wind.speed)}
            {' '}
            Km/h
          </p>
        </div>
        <div className="py-5 second-color">
          <p className="flex px-5 justify-between">
            <span>Wind degree: </span>
            {Math.round(wind.deg)}
            °
          </p>
        </div>
        <div className="py-5 first-color">
          <p className="flex px-5 justify-between">
            <span>Humidity: </span>
            {Math.round(main.humidity)}
            °
          </p>
        </div>
      </div>
    </div>
  );
};

CountryDetails.propTypes = {
  weatherData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
  }).isRequired,
};

export default Details;

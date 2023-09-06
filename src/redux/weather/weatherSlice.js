import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const country = [
  'Haiti',
  'London',
  'Germany',
  'Russie',
  'Netherlands',
  'France',
  'Inde',
  'Australie',
];

export const fetchData = createAsyncThunk(
  'fetch/weatherData',
  async () => {
    try {
      const promises = country.map(async (countries) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${countries}&appid=8ce64a8f25a125effdf8a069dfec0ba6&units=metric`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      });
      return Promise.all(promises);
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  },
);

const initialState = {
  weather: [],
  isLoading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.weather = action.payload;
    },
    [fetchData.rejected]: (state) => {
      state.isLoading = false;
      state.error = 'Error fetching data';
    },
  },
});

export const weatherForSelectCrountry = (state, country) => state.weather.weather.find(
  (city) => city.name === country,
);

export default weatherSlice.reducer;

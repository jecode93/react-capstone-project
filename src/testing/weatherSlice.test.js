import weatherReducer, { fetchData } from '../redux/weather/weatherSlice';

describe('weatherReducer', () => {
  const initialState = {
    weather: [],
    isLoading: false,
    error: null,
  };

  it('should handle fetchData.pending', () => {
    const action = fetchData.pending;
    const nextState = weatherReducer(initialState, action);
    expect(nextState.isLoading).toBeTruthy();
  });

  it('should handle fetchData.fulfilled', () => {
    const payload = [{ name: 'Haiti' }];
    const action = fetchData.fulfilled(payload);
    const nextState = weatherReducer(initialState, action);
    expect(nextState.weather).toEqual([{ name: 'Haiti' }]);
    expect(nextState.isLoading).toBeFalsy();
  });

  it('should handle fetchData.rejected', () => {
    const action = fetchData.rejected;
    const nextState = weatherReducer(initialState, action);
    expect(nextState.isLoading).toBeFalsy();
  });

  it('should handle fetchData.fulfilled', () => {
    const payload = {
      name: 'Haiti',
      main: {
        temp: 24.44,
      },

    };
    const action = fetchData.fulfilled(payload);
    const nextState = weatherReducer(initialState, action);
    expect(nextState.weather.name).toBe('Haiti');
    expect(nextState.weather.main.temp).toEqual(24.44);
  });
});

describe('Selectors in weatherSlice', () => {
  const mockState = {
    weather: [
      { main: { temp: 27.44 } },
      { name: 'Haiti' },
    ],
    isLoading: false,
    error: null,
  };

  it('Weather should return the weather data', () => {
    const selectedData = mockState.weather;
    expect(selectedData).toEqual(mockState.weather);
  });

  it('MockState should return the weather status', () => {
    const selectedStatus = mockState.isLoading;
    expect(selectedStatus).toBe(mockState.isLoading);
  });

  it('MockState should return the weather error', () => {
    const selectedError = mockState.error;
    expect(selectedError).toBe(mockState.error);
  });
});

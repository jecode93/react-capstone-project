import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Details from './component/pages/Details';
import Homepage from './component/pages/Homepage';
import { fetchData } from './redux/weather/weatherSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/city/:cityName" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

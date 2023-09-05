import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Homepage from './component/pages/Homepage';
import Details from './component/pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

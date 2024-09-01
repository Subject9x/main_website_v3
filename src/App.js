import logo from './logo.svg';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css';
import Landing from './pages/Landing';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

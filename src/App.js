import logo from './logo.svg';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css';
import Landing from './pages/landings/Landing';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import CodeGarage from './pages/landings/CodeGarage';
import CodeProject from './components/projects/code/CodeProject';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route exact path="/code" element={<CodeGarage />} >
          <Route exact path="/code/:projId" element={<CodeProject />} />
        </Route>
        {/*<Route exact path="/artwork" element={<CodeGarage />} />*/}
        {/*<Route exact path="/boardgame" element={<CodeGarage />} />*/}
        {/*<Route exact path="/networking" element={<CodeGarage />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

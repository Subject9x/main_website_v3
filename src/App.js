import logo from './logo.svg';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css';
import './orbital_ext.css';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CodeGarage from './pages/CodeGarage';
import CodeProject from './components/projects/code/CodeProject';
import Artwork from './pages/Artwork';
import BoardGames from './pages/BoardGames';
import Networking from './pages/Networking';
import ArtMinis from './pages/art/ArtMinis';
import ArtConcepts from './pages/art/ArtConcepts';
import ArtRecoil from './pages/art/ArtRecoil';
import ArtModels from './pages/art/ArtModels';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route exact path="code" element={<CodeGarage />} />
        <Route exact path="project/code/:projId" element={<CodeProject />} />
        
        <Route exact path="artwork" element={<Artwork />} />
        <Route exact path="art/minis" element={<ArtMinis />}/>
        <Route exact path="art/concepts" element={<ArtConcepts />}/>
        <Route exact path="art/recoil" element={<ArtRecoil />}/>
        <Route exact path="art/models" element={<ArtModels />}/>
        
        <Route exact path="boardgame" element={<BoardGames />} />
        <Route exact path="project/board/:projId" element={<CodeProject />} />

        <Route exact path="networking" element={<Networking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

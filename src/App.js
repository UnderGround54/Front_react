import './App.css';
import Provinces from './composants/provinces/Provinces';
import CreerProvince from './composants/provinces/CreerProvince';
import EditProvince from './composants/provinces/EditProvince'
import Regions from './composants/regions/Regions';
import CreerRegion from './composants/regions/CreerRegion'
import EditRegion from './composants/regions/EditRegion'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Provinces/>} />
          <Route path='/provinces/create' element={ <CreerProvince/>} />
          <Route path='/provinces/:id' element={ <EditProvince/>} />
          <Route path='/regions' element={ <Regions/>} />
          <Route path='/regions/create' element={ <CreerRegion/>} />
          <Route path='/regions/:id' element={ <EditRegion/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

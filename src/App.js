import './App.css';
import Provinces from './composants/Provinces';
import CreerProvince from './composants/Provinces';
import EditProvince from './composants/EditProvince'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Provinces/>} />
          <Route path='/create' element={ <CreerProvince/>} />
          <Route path='/:id' element={ <EditProvince/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

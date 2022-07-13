import './App.css';
import Provinces from './composants/Provinces';
import CreerProvince from './composants/CreerProvince';
import EditProvince from './composants/EditProvince'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Provinces/>} />
          <Route path='/provinces/create' element={ <CreerProvince/>} />
          <Route path='/provinces/:id' element={ <EditProvince/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

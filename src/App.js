import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import ImagesIndex from './components/ImagesIndex'


function App() {
  return (

    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/images' element={<ImagesIndex/>}/>

      
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;

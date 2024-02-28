import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Mainmenu from './components/Mainmenu'
import Home from './components/Home'
import ImagesIndex from './components/ImagesIndex'
import Login from './components/Login'
import Logout from "./components/Logout"
import Signup from "./components/Signup"


function App() {
  return (

    <BrowserRouter >
    <Mainmenu />
      <Container className='mt-5'>    
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>    
     </Container>
    </BrowserRouter>

  );
}
export default App;

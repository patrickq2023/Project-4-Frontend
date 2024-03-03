import { Nav, Navbar } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import logoImage from './assets/logo.png'

export default function Mainmenu() {
    const [isAuth, setAuth] = useState(false)

    useEffect(() =>{
        if(localStorage.getItem('access_token') !== null) {
              setAuth(true) 
        }             
    }, [isAuth])
  return (
    <Navbar bg='dark' variant='dark'>
       <Nav style={{ textAlign:'center', display: 'flex', flexDirection: 'row'}}>
       <Nav.Link href='/'>Home</Nav.Link>
       <Nav.Link href='/imageUpoad'>Post</Nav.Link>
       <Nav.Link href='/about'>About</Nav.Link>


       {isAuth ? (
            <Nav.Link href='/logout'>Logout</Nav.Link>
        ) : (
          <>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/signup'>SignUp</Nav.Link>           
            </>
       )}                
       </Nav>
       </Navbar>
  )
}

import { Nav, Navbar, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'

export default function Mainmenu() {
    const [isAuth, setAuth] = useState(false)

    useEffect(() =>{
        if(localStorage.getItem('access_token') !== null) {
              setAuth(true) 
        }             
    }, [isAuth])
  return (
    <Navbar bg='dark' variant='dark'>
       <Navbar.Brand href='/'>Django Auth in React</Navbar.Brand>
       <Nav className='me-auto'>
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

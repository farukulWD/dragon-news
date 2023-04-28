import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';


const NavigationBar = () => {
    const {user, logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
      logOut()
      .then(result=>{
  
      }).catch(error=>{
        console.log(error);
      })
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link  className="text-decoration-none px-2 py-1" to="/category/0">Home</Link>
              <Link className="text-decoration-none px-2 py-1"  to="#">About</Link>
              <Link className="text-decoration-none px-2 py-1"  to="#">Carrier</Link>
              
            </Nav>
            <Nav>
              {user && <Nav.Link href="#"> <FaUserCircle style={{fontSize:"2rem"}}></FaUserCircle> 
              </Nav.Link>}
                {user?
                <Button variant="secondary" onClick={handleLogOut} >Log Out</Button>
                :<Link to="/login"><Button variant="secondary" >Login</Button></Link>
                }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Ropa,tallas} from "./productos";
import Table from 'react-bootstrap/Table';
export const Mares_inicio =()=>{
   
return (
<>
    <div class='row'>
        <div>
            <button>
                X-C
            </button>
            <button>
                C
            </button>
            <button>
                M
            </button>
            <br />
            <button>
                G
            </button>
            <button>
                XL
            </button>
            <button>
                XXL
            </button>
        </div>
      
    </div>



</>

)
}
export const Menu_dinamico = ()=> {
return (
<>
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./liverpool.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Liverpool
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

</>
);

}
export const tablas_dinamicas = (Ropa) =>{
    for (let index = 0; index < Ropa.length; index++) {
        const element = array[index];
        console.log(index.nombre)
     
    }
   
}

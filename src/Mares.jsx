// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Ropa,tallas} from "./productos";
import Table from 'react-bootstrap/Table';
export const Mares_inicio =()=>{
   
return (
<>
    <div className='row mt-4 my-4' >
        <div>
            <button onClick={alert('hola')}>
                X-C
            </button>
            <button onClick={alert('hola')}>
                C
            </button>
            <button onClick={alert('hola')}>
                M
            </button >
            <br />
            <button onClick={alert('hola')}>
                G
            </button>
            <button onClick={alert('hola')}>
                XL
            </button>
            <button onClick={alert('hola')}>
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
<Navbar bg="dark" variant="dark" >
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

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
        <div class='container mt-3 my-3'>
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
            <Navbar.Brand href="#home">Liverpool </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Contacto</Nav.Link>
                <Nav.Link href="#pricing">Sucursales</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

</>
);

}
export const tablas_dinamicas = () =>{
            const  Tabla_productos = (id) => {
                Ropa.find( clother => clother.identificación == id);
            }  
    const getHeroesByOwner = (tall) => tallas.filter( talla => talla.dueño ==  Owner );
}

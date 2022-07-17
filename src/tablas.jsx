
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Ropa,tallas } from './productos';




export const Tablas = () =>{
    
    return (
        <div className='row'>

            {
            Ropa.map((rope)=>{
               
              
                return (
                    <>
                    <Card style={{ width: '18rem' ,height:'18rem'}} className="mt-3 my-3">
                        <Card.Img variant="top" src={rope.Image} style={{ width: '120px' ,height:'120px'}}/>
                        <Card.Body>
                            <Card.Title>{rope.nombre}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                       
                            <Card.Text>
                            Precio: $ {rope.precio} con descuento
                            </Card.Text>
                            <Card.Text>
                            Descuento: ${rope.descuento * rope.precio}
                            </Card.Text>
                            <div className='text-center'>
                            <Button variant="warning" className='text-white' ><i className='fas fa-icon'></i></Button>

                            <Button variant="primary">Comprar</Button>
                            </div>
                            
                        </Card.Body>
                        </Card>
                    </>
                )
            })
            }
        </div>
    )
   
}

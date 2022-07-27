
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Ropa,tallas } from './productos';




export const Tablas = () =>{
    
    return (
        <div className='row' >

            {
            Ropa.map((rope)=>{
               
              
                return (
                    <>
                    <div className='col-sm-3'>
                    <Card style={{ width: '25rem' ,height:'25rem'}} className="mt-3 my-3">
                        <Card.Img variant="top" src={rope.Image} className='justify-content-center' style={{ width: '120px' ,height:'120px'}}/>
                        <Card.Body>
                            <Card.Title>{rope.nombre}</Card.Title>
                                                  
                            <Card.Text>
                            Precio: $ {rope.precio} con descuento
                            </Card.Text>
                            <Card.Text>
                            Descuento: ${rope.descuento * rope.precio}
                            </Card.Text>
                            
                            <Button >Agregar al carrito</Button>

                            <Button>Comprar</Button>
                           
                            
                        </Card.Body>    
                        </Card>
                    </div>
                   
                   
                   
                    </>
                )
            })
            }
        </div>
    )
   
}

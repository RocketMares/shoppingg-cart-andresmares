// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Ropa,tallas } from './productos';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Mares_inicio =()=>{
   
return (
<>
    <div className="nav justify-content-center" >
        <div>
            <button  onClick={ Filtro_tallas_X_C}>
                X-C
            </button >
            <button  onClick={Filtro_tallas_C}>
                C
            </button>
            <button onClick={Filtro_tallas_M}>
                M
            </button >
            
            <button  onClick={Filtro_tallas_G}>
                G
            </button>
            <button  onClick={Filtro_tallas_XL}>
                XL
            </button>
            <button  onClick={Filtro_tallas_XXL}>
                XXL
            </button>
        </div>
      
    </div>



</>

)
}

export const Filtro_tallas_X_C = (e) => {
    const resultado =  Ropa.filter( tall => tall.talla ==  'X-C' ) 
    resultado.map((rope)=>{
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
    );
    })  
   
}
export const Filtro_tallas_C = (e) => {
    const result = words.filter(word => word.length > 6);

    console.log(result);
}
const Filtro_tallas_M = (e) => {
    const result = words.filter(word => word.length > 6);

    console.log(result);
}
const Filtro_tallas_G = (e) => {
    const result = words.filter(word => word.length > 6);

    console.log(result);
}
const Filtro_tallas_XL = (e) => {
    const result = words.filter(word => word.length > 6);

    console.log(result);
}
const Filtro_tallas_XXL = (e) => {
    const result = words.filter(word => word.length > 6);

    console.log(result);
}


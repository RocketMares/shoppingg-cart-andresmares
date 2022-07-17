import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

export const CaruselBanner = (e) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>  
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >
                <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 vh-100 mt-3"
                    src="src/svg/undraw_web_shopping_re_owap.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Selecciona tus prendas favoritas</h3>
                    <p>Con selección de tallas, y cantidad de prendas que quieras.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 vh-100"
                    src="src/svg/undraw_order_confirmed_re_g0if.svg"
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    <h3>Recibe confirmación de compra</h3>
                    <p>Con ayuda de la confirmación via email, confirma tus compras.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 vh-100"
                    src="src/svg/undraw_successful_purchase_re_mpig.svg"
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h3>Disfruta</h3>
                    <p>
                    Recibe tus productos en tiempo y forma y disfruta.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
  }

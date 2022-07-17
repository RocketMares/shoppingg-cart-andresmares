// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';



export const Mares_inicio =()=>{
   
return (
<>
    <div ClassName='row'>
        <div>
            <button className='btn btn-light btn-circle btn-xl shadow-sm p-1 mb-1 ' onClick={ Filtro_tallas}>
                X-C
            </button >
            <button className='btn btn-light btn-circle btn-xl shadow-sm  p-1 mb-1' onClick={Filtro_tallas}>
                C
            </button>
            <button className='btn btn-light btn-circle btn-xl shadow-sm  p-1 mb-1' onClick={Filtro_tallas}>
                M
            </button >
            <br />
            <button className='btn btn-light btn-circle btn-xl shadow-sm  p-1 mb-1' onClick={Filtro_tallas}>
                G
            </button>
            <button className='btn btn-light btn-circle btn-xl shadow-sm p-1 mb-1' onClick={Filtro_tallas}>
                XL
            </button>
            <button className='btn btn-light btn-circle btn-xl shadow-sm  p-1 mb-1' onClick={Filtro_tallas}>
                XXL
            </button>
        </div>
      
    </div>



</>

)
}

const Filtro_tallas = (e) => {
  
}


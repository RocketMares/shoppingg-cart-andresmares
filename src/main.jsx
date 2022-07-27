import React from "react";
import  ReactDOM  from "react-dom/client";

import {Mares_inicio,Filtro_tallas_X_C}  from "./Mares";

import {Menu_dinamico}  from "./Navbar";
import {Tablas}  from "./tablas";
import './mares.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('Menu_din')).render(
    <React.StrictMode>
       <Menu_dinamico /> 
    </React.StrictMode>
);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <Mares_inicio /> 
    </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('tablas')).render(
    <React.StrictMode>
       <Tablas /> 
    </React.StrictMode>
);



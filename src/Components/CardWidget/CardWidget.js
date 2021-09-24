import React from 'react'
import { Icon } from 'semantic-ui-react'
import  './CardWidget.css';


const CardWidget = () => 

<div className="CardWidget">
<h1 className="logo-container"><Icon disabled name='cart' /></h1>
<ul className="nav-list">
<li className="items">productos</li>
<li className="items">contacto</li>
<li className="items">about</li>
</ul>
</div>
export default CardWidget

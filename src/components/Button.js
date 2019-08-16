import React from 'react';
import '../App.css';

const Button = (props) =>{

  const { name  ,LoginClick,bname } = props

 return <button className="buttonD" onClick={LoginClick} > 
   {name} {bname}
  </button>
}
export default Button;
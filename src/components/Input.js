import React from 'react';
import '../App.css';

const Input = (props) =>{
    
    const {type ,placeholder,onChangeHandle ,keyName,val } = props
  
 return <input type={type} 
        className="inputD" 
        placeholder={placeholder}  
        onChange={(ev) => onChangeHandle(ev,keyName )} 
        value={val}
         />
}
export default Input;
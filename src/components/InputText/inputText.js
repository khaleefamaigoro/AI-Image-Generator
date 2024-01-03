import React from "react";
import './index.css';

const InputText = ({onButtonSubmit,onInputChange,validate}) => {
   return(
      <div className="input-group">
         <input type="text" onChange={onInputChange}/>  
         <button disabled={validate} onClick={onButtonSubmit}>Detect</button>   
      </div>
   )
}

export default InputText;
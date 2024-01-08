import React from "react";
import './index.css';

const InputText = ({onButtonSubmit,onInputChange,validate}) => {
   return(
      <div className="input-group">
         <input type="text" placeholder="Write something" onChange={onInputChange}/>  
         <button disabled={validate} onClick={onButtonSubmit}>Generate</button>   
      </div>
   )
}

export default InputText;
import React from 'react'

function Button({ children , onClick, color = "primary"}){
  return (
    <>
        <button type="button" onClick={onClick} className={`btn btn-` + color}>{children}</button>
    </>
    
  );
};

export default Button;
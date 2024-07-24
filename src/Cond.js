import React, { useState } from "react";
import Login from './Login';
import Register from './Register';
function Cond(props) {
  const [login, setLogin] = useState(true);

  const handleClick1 = () => {
    setLogin(false);
  };
  const handleClick = () => {
    setLogin(true);
  };

  return (
    <div style={{padding:'50px',textAlign:'center'}}>
      <button onClick={handleClick}>login</button>

      <button onClick={handleClick1}> register</button>
      <br></br>
      {login ? <Login /> : <Register/>}
    </div>
  );
}

export default Cond;
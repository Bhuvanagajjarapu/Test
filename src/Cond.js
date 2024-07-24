import React, { useState } from "react";

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

      <button onClick={handleClick1}>r egister</button>
      <br></br>
      {login ? <h1>Login Message  </h1> : <h1>Register message</h1>}
    </div>
  );
}

export default Cond;
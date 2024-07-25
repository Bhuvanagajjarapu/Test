import React from 'react';


function One(props) {
    const car = (a,b) =>
    {
        alert(a.type);
    }
    return (
        <div>
            <button onClick={(event)=>car(event,"AA cheppu")}>button click cheyy..!</button>
            
        </div>
    );
}

export default One;
import React, { useRef } from 'react';

function Eleven(props) {
    const firstRef = useRef(null);
    const formSubmitted = (event) =>{
        event.preventDefault();
        console.log("Form");
        console.log(firstRef.current.value);
    }
    return (
        <div>
            <form onSubmit={formSubmitted}>
                    <input type="text" ref={firstRef}/>
                    <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Eleven;
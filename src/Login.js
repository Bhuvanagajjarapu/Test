import React, { useEffect, useRef, useState } from 'react';

function Login(props) {
    const firstRef = useRef(null);
    const passwordRef = useRef(null);  
    const[message,setMessage]=useState("");
    useEffect(()=>{
        firstRef.current.focus();
    })
    const formSubmitted = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        console.log("College-ID:", firstRef.current.value);
        console.log("Password:", passwordRef.current.value);
        if(firstRef.current.value == passwordRef.current.value){
              setMessage("correct details");
        }else{
            setMessage("incorrectDetails");
        }
    }

    return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
             <div className='text-center col-md-6'>
            <div class="card">
                
                    <h1 style={{color:"blueviolet"}}>Login</h1>
                    <br></br>
                    <form onSubmit={formSubmitted}>
                        
                            <h4>College-ID</h4>
                            <input type="text" ref={firstRef} />
                            <br></br>
                            <br></br>
                            <h4>Password</h4>
                            <input type="password" ref={passwordRef} />
                            <br></br>
                            <br></br>
                            <button type="submit" style={{backgroundColor:'black',color:'white'}}>Submit</button>
                    </form>
                <h3 className='mt-5'>{message}</h3>
            </div>
            </div>
            </div>
        </div>
        
    );
}

export default Login;

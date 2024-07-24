import React, { useState } from "react";

function Register(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [gen, setGen] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    // console.log(event)
    event.preventDefault();
    console.log(result)
  };
  const handleChange = (event) => {
    console.log(event);
    const {key , value}=event.target
    event.preventDefault();
   setResult((prevData)=>({
    ...prevData,[key]:value
   }))
//    console.log(result)
  };
  return (
    <div className='text-center col-md-6'>
        <div className='col-md-3'></div>
        <h1>Registration Form</h1><br></br>
        <div className="card-body">
      <form onSubmit={handleSubmit}>
        <label>
          College ID
          <input type="text" name="id" placeholder="enter id" onChange={handleChange} />
        </label><br></br><br></br>
        <label>
          Password
          <input type="text" name="password" placeholder="enter password" onChange={handleChange} />
        </label><br></br><br></br>
        <label>
          Email address
          <input type="text" name="email"  placeholder="enter email"onChange={handleChange} />
        </label><br></br><br></br>
        <label>
          Branch
          <select class="form-select" aria-label="Default select example">
            <option selected>Select a Branch</option>
            <option value="1">CSE</option>
            <option value="2">IT</option>
            <option value="3">ECE</option>
          </select>
        </label><br></br><br></br>
        <label>
          Year
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Year</option>
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
          </select><br></br>
        </label><br></br>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Register;
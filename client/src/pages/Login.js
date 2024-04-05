import React from 'react';
import "../styles/RegisterStyles.css";
import {Form,Input} from 'antd';
import {Link} from 'react-router-dom';



const Register = () => {
 //form handler
  const onfinishHandler=(values)=>{
    console.log(values)
  }
  return (
   <>
    <div className="form-container">
      <Form layout="vertical" onfinish={onfinishHandler} className="register-form">
        <h3 className='text-center'>Login Form</h3>
        
        
        <Form.Item label="Email" name="email">
            <Input type="text"required />
        </Form.Item>
        <Form.Item label="Password" name="password">
            <Input type="text"required />
        </Form.Item>
        <Link to="/Register" className='m-3'>Not a user Register here</Link>
        <button className="btn btn-primary" type="submit">Login</button>
      </Form>
    </div>
   
   </>
  )
}

export default Register
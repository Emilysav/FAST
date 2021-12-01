import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import running from '../../images/running.jpg';
import './Form.css'
import axios from "axios";
import Loading from './Loading'

const LoginForm = ({history}) => { 

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
   
    const submitHandler = async (e) => {
        e.preventDefault();

        try{
            const config ={
                headers:{
                    "Content-type": "application/json"
                }
            }

            setLoading(true)

            const {data} = await axios.post(
                'api/users/Login', 
                {
                    email, 
                    password
                }, 
                config );

            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data))
            setLoading(false);
            

        }catch(error) {
            setError(error.response.data.message);

        }
    };
    

    return (
     <div className="login-Form" style={{ backgroundImage: `url(${running})`}}>
         <h1>Login</h1>
         {loading && <Loading/>}
         <Form onSubmit={submitHandler}>
             <Form.Group className="form-box">
                 <Form.Label>Email Address</Form.Label>
                 <Form.Control
                    type="email"
                    value={email}
                    placeholder="enter email here"
                    onChange={(e) => setEmail(e.target.value)}
                 />
             </Form.Group>

             <Form.Group className="form-box1">
                 <Form.Label>Password</Form.Label>
                 <Form.Control
                    type="password"
                    value={password}
                    placeholder="enter password here"
                    onChange={(e) => setPassword(e.target.value)}
                 />
             </Form.Group>

             <Button variant="primary" type="submit">
                 Login <Link to="/Profile">!</Link>
             </Button>
         </Form>

        <Row className="signuplink">
            <Col>
                Haven't signed up yet? Click <Link to="/Signup">Here</Link>
            </Col>
        </Row>

     </div>
    )}
    

export default LoginForm;

import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import running from '../../images/running.jpg';
import './Form.css'
import axios from "axios";
import Loading from './Loading'

const SignupForm = ({history}) => { 

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(false)
    const [loading, setLoading] = useState(false)
    

    const submitHandler = (e) => {
        e.preventDefault();
    
        if (password !== confirmpassword) {
          setMessage("Passwords do not match");
        } else{
            setMessage("null")
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",
                    },
                };
                setLoading(true);

                const { data} = axios.post("/api/users", {
                    name,  
                    email, 
                    password
                }, config );
                setLoading(false);
                localStorage.setItem("userInfo", JSON.stringify(data));
            } catch (error) {}
        }
      };
    

    return (
     <div className="login-Form" style={{ backgroundImage: `url(${running})`}}>
         <h1>Sign Up!</h1>
         {loading && <Loading />}
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

             <Form.Group className="form-box3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                     type="password"
                     value={confirmpassword}
                     placeholder="Confirm Password"
                     onChange={(e) => setConfirmPassword(e.target.value)}
                />
             </Form.Group>

             <Form.Group className="form-box2">
                 <Form.Label>Name</Form.Label>
                 <Form.Control
                    type="name"
                    value={name}
                    placeholder="enter name here"
                    onChange={(e) => setName(e.target.value)}
                 />
             </Form.Group>
             

             <Button variant="primary" type="submit">
                 Sign!
             </Button>
         </Form>

        <Row className="signuplink">
            <Col>
                Haven't signed up yet? Click <Link to="/Signup">Here</Link>
            </Col>
        </Row>

     </div>
    )}
    
export default SignupForm;
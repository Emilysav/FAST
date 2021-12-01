import React from 'react';
import Mitzy from '../../images/Mitzy.jpeg'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import trees from '../../images/trees.jpg'
import Button from 'react-bootstrap/Button'
import './profilepg.css'

function Profilepage() {
    return (
        <div className="all">
            <h1 className="bkg1"> Welcome Back Emily!</h1>
            <img className="bkg2" src={Mitzy} height="150px" width="200px" 
            ></img>
            <br></br>

            <h1></h1>
            <h1></h1>
            <h1></h1>
            <div className="bkg3">
                <h3> Challange Progress! </h3>
                <h5>Challange 1</h5>
                <ProgressBar striped variant="info" now={40} />
                <h5>Group challange: 5K Fun Run!</h5>
                <ProgressBar striped variant="info" now={80} />
                <h5>Global challange: Speed to success</h5>
                <ProgressBar striped variant="info" now={10} />
                <Button variant="primary" type="submit">
                 View More Here <Link to="/Challanges">!</Link>
                </Button>

             
            </div>

            

            <div className="bkg4">
                <h3>Friends!</h3>

            </div>

        
        </div>

    )
}

export default Profilepage;
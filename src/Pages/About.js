import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutForm from '../Components/About/AboutForm';
import ContactUs from '../Components/About/ContactUs';
import Header from '../Components/About/Header';


class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <Header/>
          <ContactUs/>
          <br></br>
          <AboutForm/>
        </div>
      </div>

    );
    }}

  export default About;
  

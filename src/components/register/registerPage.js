import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Button, Form, Col, Row } from 'react-bootstrap';

import './Register.scss';
import { registerUserAction } from '../../actions/authenticationActions';

class RegisterPage extends Component {

   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         phone: '',
         organization: '',
         password: ''

      }
   }

   handleName = (e) => {
      this.setState({ name: e.target.value })
   }
   handleEmail = (e) => {
      this.setState({ email: e.target.value })
   }

   handleNumber = (e) => {
      this.setState({ phone: e.target.value })
   }
   handleOraganization = (e) => {
      this.setState({ organization: e.target.value })
   }
   handlePassword = (e) => {
      this.setState({ password: e.target.value })
   }


   onHandleRegistration = (event) => {
      event.preventDefault();

      // let name = event.target.name.value;
      // let email = event.target.email.value;
      // let password = event.target.password.value;

      // const data = {
      //    name, email, password
      // };
      let data = {

         name: this.state.name,
         email: this.state.email,
         phone: this.state.phone,
         organization: this.state.organization,
         password: this.state.password
      }

      this.props.dispatch(registerUserAction(data));
   }

   componentDidMount() {
      // document.title = 'React Login';
      //let token_type = this.props.token

   }

   render() {
      let message, isSuccess, error, validation;

      if (this.props.response.register.hasOwnProperty('response')) {
         isSuccess = this.props.response.register.response.success;
         message = this.props.response.register.response.message;
         error = this.props.response.register.response.data;
         
        
      }

      return (
        

         <Container className=" mb-3 p-5  mainbox" style={{ backgroundImage: `url("../image/rectangle.png")` }}>
            <Row className="mt-5">
               <Col sm={6} className="mt-3">
                  <div className="container d-flex justify-content-center align-items-center">
                     <div sm={12} >
                        <h4 className="fw-bold mb-3">Start Your Free Trail</h4>
                        <h5>No credit card required,no software to install.</h5>
                        <p>with your-day trial, you get:</p>
                        <ul className="list">
                           <li>Pre-loaded data or upload your own</li>
                           <li>Pre-configured processes, reports, and dashboards</li>
                           <li>Guided experiences for sales reps, leaders, and administrators</li>
                           <li>Online Training and live onboarding webinars</li>

                        </ul>
                        <p>Question? Talk to an expret: 1800-9966-8686</p>

                     </div>

                  </div>
                  <div className="container d-flex justify-content-center align-items-center">
                     <img src="../image/slide1.gif" class="img-fluid w-50" alt="..." />
                  </div>
               </Col>
               <Col sm={4} className="loginwidth mt-2">
                  <Form onSubmit={this.onHandleRegistration}>
                     <Row className=' '>
                        <div col className='text-center'>
                           <img src="../image/logo.png" class="" alt="..." />
                        </div>
                     </Row>
                     <Row >
                        <Form.Group as={Col} controlId="formGridEmail" >
                           <span className='forms-text'> Name</span>
                           <Form.Control type="text" className='p-2' placeholder="Enter your name" value={this.state.name} onChange={(e) => { this.handleName(e) }} />
                           {!isSuccess ? <div>{ typeof error != 'undefined' ? error.name : ''}</div> : <Navigate to='/' />}
                        </Form.Group>
                     </Row>
                     <Row className="">
                        <Form.Group as={Col} controlId="formGridPassword" >
                           <span className='forms-text'>Email</span>
                           <Form.Control type="email" className='p-2' placeholder="Enter  your email" value={this.state.email} onChange={(e) => { this.handleEmail(e) }} />
                           {!isSuccess ? <div>{ typeof error != 'undefined' ? error.email : ''}</div> : <Navigate to='/' />}
                        </Form.Group>
                     </Row>
                     <Row className="">
                        <Form.Group as={Col} controlId="formGridCompany" >
                           <span className='forms-text'>Phone Number</span>
                           <Form.Control type="number" className='p-2' placeholder="Enter Phone number" value={this.state.phone} onChange={(e) => { this.handleNumber(e) }} />
                           {!isSuccess ? <div>{ typeof error != 'undefined' ? error.phone : ''}</div> : <Navigate to='/' />}
                        </Form.Group>
                     </Row>
                     <Row className="">
                        <Form.Group as={Col} controlId="formGridPhone" >
                           <span className='forms-text'>Organization</span>
                           <Form.Control type="text" className='p-2' placeholder="Oraganization" value={this.state.organization} onChange={(e) => { this.handleOraganization(e) }} />
                           {!isSuccess ? <div>{ typeof error != 'undefined' ? error.organization : ''}</div> : <Navigate to='/' />}
                        </Form.Group>
                     </Row>
                     <Row className="">
                        <Form.Group as={Col} controlId="formGridPhone" >
                           <span className='forms-text'>Password</span>
                           <Form.Control type="password" className='p-2' placeholder="Enter password" value={this.state.password} onChange={(e) => { this.handlePassword(e) }} />
                           {!isSuccess ? <div>{  error != undefined ? error.password : ''}</div> : <Navigate to='/' />}
                        </Form.Group>
                     </Row>
                     <Row >
                        <div className='col pt-3'>
                           <Button variant="primary" type="submit" className=' w-100 submitbtn'>Signup</Button>
                        </div>
                     </Row>
                     <Row className="mt-2">
                        <Col>
                           <Form.Group className="mb-3 mt-3 float-start" id="formGridCheckbox">
                              <Form.Check type="checkbox" label="By creating an account means you agree to the Terms and Conditions, and our Privacy Policy" />
                           </Form.Group>

                        </Col>

                     </Row>

                  </Form>
                 Already have account? <Link to='/'>Login here</Link>
               </Col>
            </Row>
         </Container>


      )
   }
}

const mapStateToProps = (response) => ({

   response


});


export default connect(mapStateToProps)(RegisterPage);

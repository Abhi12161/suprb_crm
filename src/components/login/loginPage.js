import React from "react";
import { Container, Button, Form, Col, Row, Carousel,Tabs,Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCookie } from '../../utils/cookies';
import  './login.scss';
import { Link, Navigate } from 'react-router-dom';

import { loginUserAction } from '../../actions/authenticationActions';
import RegisterPage from "../register/registerPage";
import LoginPage from '../login/loginPage';


// function Login() {
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
     userId: '',
     password: '',
    // username: "",
     //password: "",
     rememberMe: true

    }
  }
  // const [index, setIndex] = useState(0);
  // const [userId, setUserId] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex
    })
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  handleUserId = (e) => {
    this.setState({
      userId: e.target.value
    // username: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      login_id: this.state.userId,
      password: this.state.password
//username: this.state.username,
//password:this.state.password

    }
    this.props.dispatch(loginUserAction(data));
  }
  render() {
    let isSuccess, message;

    console.log(this.props.response);
    if (this.props.response.login.hasOwnProperty('response')) {
      //isSuccess = this.props.response.login.response.id_token;
      //message = this.props.response.login.response.message;
      isSuccess = this.props.response.login.response.data.access_token;
      message = this.props.response.login.response.message;


      if (isSuccess) {
        setCookie('token', this.props.response.login.response.id_token, 1);
      }
      if (!isSuccess) {
        throw Error("Error!!!");
      }
      
      
      
    
    }
    return (
    //   <Container className={style.logincontainer} >
       
    //     <Container>
    //       <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
    //         <Carousel.Item>
    //           <img
    //             className="d-block img-fluid"
    //             src="../image/slide1.gif"
    //             alt="First slide"
    //           />
    //           <Carousel.Caption>
                
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className="d-block img-fluid"
    //             src="../image/slide.gif"
    //             alt="Second slide"
    //           />

    //           <Carousel.Caption>
                
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className="d-block img-fluid"
    //             src="../image/slide2.gif"
    //             alt="Third slide"
    //           />

    //           <Carousel.Caption>
                
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //       </Carousel>
    //     </Container>
    //     <Container>
    //       <Row>
    //         <div className='text-center'>
    //           <img src="../image/logo.png" className="img-fluid" alt="..." />
    //         </div>
    //       </Row>
    //       <Row>
    //         <Form onSubmit={this.handleSubmit} >
    //           <Row >
    //             <Form.Group as={Col} controlId="formGridEmail" >
    //               <span className={style.forms_text}>User Id</span>
    //               <Form.Control type="text" className={style.input_field} value={this.state.userId} onChange={(e) => { this.handleUserId(e) }} placeholder="Enter User Id" />
    //             </Form.Group>
    //           </Row>
    //           <Row className="mb-3 pt-3">
    //             <Form.Group as={Col} controlId="formGridPassword" >
    //               <span className={style.forms_text}>Password</span>
    //               <Form.Control type="password" className={style.input_field} placeholder="Enter Password" value={this.state.password} onChange={(e) => { this.handlePassword(e) }} />
    //             </Form.Group>
    //           </Row>
    //           <Row >
    //           {!isSuccess ? <div>{message}</div> : <Navigate to='Listing' />}
    //             <div className='col pt-3'>
    //               <Button variant="primary" type="submit" className={style.submitbtn}>Login</Button>
    //             </div>
    //           </Row>
    //           <Container className={style.forgot_password_container}>
    //             <Form.Group className="mb-3 mt-3 float-start" id="formGridCheckbox">
    //               <Form.Check type="checkbox" label="Remember Me" />
    //             </Form.Group>
    //             <a className={style.forgot_password} href="#">Forgot Password</a>
    //           </Container>
    //         </Form>
    //       </Row>
    //     </Container>
    //   </Container>
    // )


     //new form

     <Container className=" mb-3 p-5 infobox" style={{ backgroundImage: `url("../image/rectangle.png")` }}>
     <Row className="mt-5 container">
       <Col md={6} className="mt-5">
         <div className="container mt-3">
           <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
             <Carousel.Item>
               <img
                 className="d-block img-fluid"
                 src="../image/slide1.gif"
                 alt="First slide"
               />
               
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block img-fluid"
                 src="../image/slide.gif"
                 alt="Second slide"
               />

               
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block img-fluid"
                 src="../image/slide2.gif"
                 alt="Third slide"
               />

              
             </Carousel.Item>
           </Carousel>
         </div>
       </Col>
       <Col md={4} className="loginwidth mt-5">
        
           <Row className=' '>
             <div col className='text-center'>
               <img src="../image/logo.png" class="img-fluid" alt="..." />
             </div>
           </Row>
           <Row>
           <div>
        
        
          
          <Link to={`/`} className="link">login</Link>
          <Link to={`/register`} className="link">Signup</Link>
        
      </div>
           </Row>

           

           
           <Form  onSubmit={this.handleSubmit}>
           <Row >
             <Form.Group as={Col} controlId="formGridEmail" >
               <span className='forms-text'>User Id</span>
               <Form.Control type="text" className='p-3' value={this.state.userId} onChange={(e) => { this.handleUserId(e) }} placeholder="Enter User Id" />
             </Form.Group>
           </Row>
           <Row className="mb-3 pt-3">
             <Form.Group as={Col} controlId="formGridPassword" >
               <span className='forms-text'>Password</span>
               <Form.Control type="password" className='p-3'   value={this.state.password} onChange={(e) => { this.handlePassword(e) }} placeholder="Enter Password"  />
             </Form.Group>
           </Row>
           {!isSuccess ? <div>{message}</div> : <Navigate to='sidebar' />}
           <Row >
             <div className='col pt-3'>
               <Button variant="primary" type="submit" className='btn1 w-100 submitbtn'>Login</Button>
             </div>
           </Row>
           <Row className="mt-2">
             <Col>
               <Form.Group className="mb-3 mt-3 float-start" id="formGridCheckbox">
                 <Form.Check type="checkbox" label="Remember Me" />
               </Form.Group>
             </Col>
             <Col className='mb-3 mt-3 text-end clrtxt'>
               Forgot Password
             </Col>
           </Row>

         </Form>
       </Col>
     </Row>
   </Container>


    )

  }
    
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(Login);
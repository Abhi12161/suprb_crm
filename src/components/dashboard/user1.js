import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userDetailsAction } from '../../actions/userDetails';
import style from './dashboard.module.css'



class Userpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: ''
    }
  }


  componentDidMount() {
  
  // let access_token = this.props.access_token
    //let token_type = this.props.token
   let userDeatils = {
    //access_token: access_token,
     //token_type: token_type

   
    }
    
    this.props.dispatch(userDetailsAction(userDeatils))
  }

  render() {
    return (
      <Container className={style.dashboard_container}>
        <Row>
          <h2>User Details</h2>
        </Row>
        <Row>

        <table id="tb">
                <thead>
                    <tr>
                        <th id="th">ID</th>
                        <th>Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.userDetails !==undefined && this.props.userDetails.map(user => {
                        return <tr>
                            <td>{user.name}</td>
                            
                            
                        </tr>
                    })}
                </tbody>
            </table>
     

        
           
           

        </Row>
      </Container>
    );
  }
}


const mapStateToProps = (response) => {
  const { login, userDetails } = response
    
  console.log("user details", userDetails)
  

  return {
   // access_token: login.response.data.access_token,
   // token_type: login.response.data.token_type,
    userDetails: userDetails.userDetails
  }

};

export default connect(mapStateToProps)(Userpage);

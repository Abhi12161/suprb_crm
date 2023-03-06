import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userListingAction } from '../../actions/userListing';
import style from './dashboard.module.css'


class UserListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: ''
    }
  }

  componentDidMount() {
    // let access_token = this.props.access_token
    // let token_type = this.props.token
    let userListing = {
      length: {
        
        length:5,
        start:0
      }
    }
    this.props.dispatch(userListingAction(userListing))
  }

  render() {
    return (
      <Container className={style.dashboard_container}>
        <Row>
          <h2>User Listing</h2>
        </Row>
        <Row>
          {this.props.userListing !== undefined && <ul>
            
           <li>lead-activity:{this.props.userListing.lead_activity}</li>
          </ul>}
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = (response) => {
  const { login, userListing } = response

  console.log("user listing", userListing)

  return {
    //access_token: login.response.data.access_token,
  //  token_type: login.response.data.token_type,
    userListing: userListing.userListing
  }

};

export default connect(mapStateToProps)(UserListing);

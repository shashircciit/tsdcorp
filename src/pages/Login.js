import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import swal from 'sweetalert';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../components/Header';





class Login extends Component {


  constructor(props) {
      super(props);
      this.state = {
        
      };
     
  }


 
  render() {
    return (

      <div className="container-scroller">
        <Header/>
     </div>

    );
  }
}

export default connect(null, actions)(withRouter(Login));
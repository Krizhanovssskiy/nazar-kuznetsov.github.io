import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './services/action';
import {withRouter} from 'react-router-dom';

export default PrivatePage => {
  class Authentication extends Component {
    componentDidMount() {
      // this.props.fetchUser();
      // if (this.props.authenticated === null) {
      //   this.props.history.push({
      //     pathname: '/login',
      //     state: {from: this.props.location.pathname}
      //   });
      // }
    }



    // shouldComponentUpdate(nextProps) {
    //   // if (!nextProps.authenticated) {
    //   //   this.props.history.push({
    //   //     pathname: '/login',
    //   //     state: {from: this.props.location}
    //   //   });
    //   // }
    // }

    render() {
      if (this.props.authenticated) {
        return <PrivatePage {...this.props}/>;
      }

      return null;
    }
  }


  const mapStateToProps = state => ({
    authenticated: state.authReducer
  });

  return connect(mapStateToProps, {fetchUser})(withRouter(Authentication));
};

import React, { Component } from 'react'
import Logo from 'components/logo/Logo'

export default class Login extends Component {
handleSubmit(){

alert('hi');
this.props.history.push('/UserSearch');	
}
  render () {
    return (
      <div>
        <Logo />
        <form onSubmit={this.handleSubmit.bind(this)} >
        <div> Username :  <input type="text" ref="txtUserName" /> </div>
        <div> Password: <input type="password" ref="txtPasswor"/> </div>
        <div> <input type="submit" value="submit"/> </div>
        </form>
      </div>
    )
  }
}
Login.propTypes = {
  history: React.PropTypes.object, }

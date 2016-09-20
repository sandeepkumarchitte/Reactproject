import React, { Component } from 'react'
import Logo from 'components/logo/Logo'

export default class UserSearch extends Component {
handleSubmit(){

alert('hi');	
}
  render () {
    return (
      <div>
        <Logo />
        <div>
       <select > <option value=""> Search by </option>  <option value="email"> email</option> <option value="userid"> userid</option> </select>
       &nbsp;&nbsp;
       <input type="text" ref="txtemail"/>  &nbsp;&nbsp;
       </div>
       
      </div>
    )
  }
}

import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'

class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    handleClick = () => {
        this.setState({
            
        })
    }
  render() {
    return (
        <div className= {css.NavBar}>
            <h1>My Gallery</h1>
            <button onClick={handleClick}>Log In</button>
        </div>
    )
  }
}

export default NavBarForm

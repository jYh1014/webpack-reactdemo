import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/header.less'
class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      num: 1
    }
  }
  render(){
    return (
      <div className="header">{this.state.num}</div>
    )
  }
}
export default Header
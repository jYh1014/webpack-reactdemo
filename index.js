import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import App from './app.js'
const Render = () => {
  render(<App />, document.getElementById('root'));
}
Render()
// ReactDOM.render(<App />, document.getElementById('root'))
if(module.hot){
  console.log(11)
  module.hot.accept('./app.js', () => {
    Render()
    console.log('-----------修改----------')
  })
}
window.Render = Render;
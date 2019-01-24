import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './src/components/Header.js'
// import { hot } from 'react-hot-loader'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'app11111222'
      }
  }
  render() {
    return (
      <div>

        {this.state.name}
        <Header />
      </div>
    )
  }
}

export default App
// export default hot(module)(App)
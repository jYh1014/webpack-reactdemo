import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header.js'
// import { hot } from 'react-hot-loader'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App
// export default hot(module)(App)
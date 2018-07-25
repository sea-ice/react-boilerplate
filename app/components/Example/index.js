import React, {Component} from 'react'
import CSSModules from 'react-css-modules'

import styles from './index.css'
import logo from '../../assets/images/logo.jpg'

class Example extends Component {
  render () {
    return <div styleName="wrapper">
      <div styleName="img-wrapper">
        <img styleName="logo" src={logo} alt="react logo"/>
      </div>
      <h1>Awesome React</h1>
    </div>
  }
}

export default CSSModules(Example, styles)

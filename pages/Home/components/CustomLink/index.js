import React from 'react'
import {Route} from 'react-router'
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules'

import styles from './index.css'

class CustomLink extends React.Component {
  render () {
    let {to, children} = this.props
    return <Route
      exact
      path={to}
      children={
        ({match}) => (
          <Link to={to}>
            <span className={match ? this.props.styles['active'] : ''}>
              {children}
            </span>
          </Link>
        )
      }
     />
  }
}
export default CSSModules(CustomLink, styles)

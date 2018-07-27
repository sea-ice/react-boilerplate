import React from 'react'
import {Route} from 'react-router'
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules'

import styles from './index.css'

class CustomLink extends React.Component {
  render () {
    let {to, children} = this.props
    // let linkTemplate = ({match}) => <Link to={to} styleName={match ? 'active' : ''}>{children}</Link>
    // let styledTemplate = handleComponentStyle(linkTemplate, this.props.styles)
    return <Route
      exact
      path={to}
      children={
        ({match}) => {
          console.log(this.props.styles)
          console.log(match)
          return <Link to={to}>
            {/* <span style={{color: match ? 'red' : 'black'}}>
              {children}
            </span> */}
            <span className={match ? this.props.styles['active'] : ''}>
              {children}
            </span>
          </Link>
        }
      }
     />
  }
}
export default CSSModules(CustomLink, styles)

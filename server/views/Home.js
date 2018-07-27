import React from 'react'

import Default from './layout/Default'
import App from '../../pages/Home/components/App'

export default class Home extends React.Component {
  render () {
    let {metaData, data} = this.props
    let saveData = JSON.stringify(data)
    data.isServer = true
    return (
      <Default {...metaData}>
        <div
          id="root"
          data-cook-data={saveData}
        >
          <App {...data} />
        </div>
      </Default>
    )
  }
}

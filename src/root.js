import React, {Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import HCMobile from './containers/app'

const store = configureStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        {<HCMobile />}
      </Provider>
    )
  }
}

export default Root

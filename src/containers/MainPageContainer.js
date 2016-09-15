import  React, {Component} from 'react'

import {
  View
  
} from 'react-native'

import {connect} from 'react-redux'

import {MainPage} from '../components/MainPage'

class MainPageContainer extends Component {
  render() {
    return (
      <MainPage {...this.props} />
    )
  }
}

function mapStateToProps(state) {
 
  return {
     test:"test"
  }
}

export default connect(mapStateToProps)(MainPageContainer)

import React, {Component} from 'react'

import {
  View

} from 'react-native'

import {connect} from 'react-redux'

import {Manage} from '../components/Manage'

class ManageContainer extends Component {
  render() {
    return (
      <Manage {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  const { management } = state


  return {
    users: management.users,
    brokers: management.brokers,
    test:management.test
  }
}

export default connect(mapStateToProps)(ManageContainer)

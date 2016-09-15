import {combineReducers} from 'redux'
import management from './management'
import alertList from './alertList'

const rootReducer = combineReducers({
  management,
  alertList
})

export default rootReducer

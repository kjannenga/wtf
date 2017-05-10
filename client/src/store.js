import {combineReducers, createStore} from 'redux'
import restaurantReducer from './reducers/restaurantReducer'
import chatReducer from './reducers/chatReducer'

const rootReducer = combineReducers({
	restaurantReducer,
	chatReducer
})

const store = createStore(rootReducer)

export default store

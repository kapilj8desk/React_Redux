import { createStore } from 'redux'
import returnData from '../reducers/dataReducer'

const store = createStore(returnData);

export default store;
import { combineReducers } from 'redux'

import infoText from './infoText'
import loading from './loading'
import resultList from './resultList'
import searchCheck from './searchCheck'
import type from './type'
import word from './word'

const allReducer = combineReducers({
    infoText,
    loading,
    resultList,
    searchCheck,
    type,
    word,

})

export default allReducer
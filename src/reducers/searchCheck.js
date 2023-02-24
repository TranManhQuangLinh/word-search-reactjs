
const searchCheckReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_SEARCH_CHECK':
            return action.payload
    
        default:
            return state
    }
}

export default searchCheckReducer

const resultListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULT_LIST':
            return action.payload
    
        default:
            return state
    }
}

export default resultListReducer

const infoTextReducer = (state = 'Type any existing word\n and press enter to get meaning, example, synonyms, etc.', action) => {
    switch (action.type) {
        case 'SET_INFO_TEXT':
            return action.payload
    
        default:
            return state
    }
}

export default infoTextReducer
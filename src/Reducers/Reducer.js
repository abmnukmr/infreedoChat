
const initialState = {
    chatData:[]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHAT_DATA":
            return {...state,chatData:[action.payload,...state.chatData]}
        default:
    }        return state
}     

export default Reducer
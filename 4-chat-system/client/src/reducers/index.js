export const chatState = {
    roomName: '',
    userName: '',
}
export const reducer = (state = chatState, action) => {
    switch (action.type) {
        case 'SET_ROOM_NAME':
            return { ...state, roomName: action.payload }
        case 'SET_USER_NAME':
            return { ...state, userName: action.payload }
        case 'SET_USER_NAME_AND_ROOM_NAME':
            return { ...state, 
                userName: action.payload.userName, 
                roomName: action.payload.roomName 
            }
        default:
            return state
    }
}
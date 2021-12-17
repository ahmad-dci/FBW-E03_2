export const setRoomUserAction = (userName, roomName) => {
    return {
        type: 'SET_USER_NAME_AND_ROOM_NAME',
        payload: {
            roomName,
            userName
        }
    }
}
export const setRoomNameAction = (roomName) => {
    return {
        type: 'SET_ROOM_NAME',
        payload: roomName
    }
}
export const setUserNameAction = (userName) => {
    return {
        type: 'SET_USER_NAME',
        payload: userName
    }
}
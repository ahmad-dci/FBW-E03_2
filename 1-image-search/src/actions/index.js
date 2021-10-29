export const doneAction = data => {
    return ({
        type: 'DONE',
        payload: data
    })
}
export const extendAction = data => {
    return ({
        type: 'EXTEND',
        payload: data
    })
}
export const errorAction = () => {
    return ({
        type: 'ERROR'
    })
}
export const loadingAction = () => {
    return ({
        type: 'LOADING'
    })
}
export const noDataAction = () => {
    return ({
        type: 'NO_DATA'
    })
}
export const chooseImageAction = idx => {
    return ({
        type: 'CHOOSE_IMAGE',
        payload: idx
    })
}
export const doneAction = (data) => {
    return {
        type: 'DONE',
        payload: data
    }
}

export const noDataAction = () => {
    return {
        type: 'NO_DATA'
    }
}
export const storage = {
    searchResult: [],
    searchStatus: '',// 'done', 'error', 'loading', 'no_data'
    chosenIdx: null
}

export const reducer = (state = storage, action) => {
    switch (action.type) {
        case 'DONE':
            state = {
                ...state,
                searchResult: action.payload,
                searchStatus: 'done',
                chosenIdx: null
            }
            return state;
        case 'ERROR':
            state = {
                ...state,
                searchResult: [],
                searchStatus: 'error',
                chosenIdx: null
            }
            return state;
        case 'LOADING':
            state = {
                ...state,
                searchResult: [],
                searchStatus: 'loading',
                chosenIdx: null
            }
            return state;
        case 'NO_DATA':
            state = {
                ...state,
                searchResult: [],
                searchStatus: 'no_data',
                chosenIdx: null
            }
            return state;
        case 'CHOOSE_IMAGE':
            state = {
                ...state,
                chosenIdx: action.payload
            }
            return state;

        default:
            return state;
    }
}


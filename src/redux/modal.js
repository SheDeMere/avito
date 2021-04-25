const initialState = {
    items: [],
    loading: false,
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'modal/load/start':
            return {
                ...state,
                loading: true
            }

        case 'modal/load/success':
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default modalReducer;
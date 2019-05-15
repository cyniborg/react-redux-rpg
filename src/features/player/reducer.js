const initialState = {
    position: [0, 0]
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
        return Object.assign({}, state, {
            ...action.payload
        })
        default:
        return state;
    }
}

export default playerReducer;
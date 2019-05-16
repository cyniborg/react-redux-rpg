const initialState = {
    tiles: []
}

const mapReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TILES':
        return Object.assign({}, state, {
            ...action.payload
        })
        default:
        return state;
    }
}

export default mapReducer;
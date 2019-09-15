const initialState = {
    items: []
}

export default function (state = initialState, actions) {
    console.log(state);
    switch (actions.type) {
        case 'fetch':
            console.log("fetched");
            console.log(actions.payload);
            return {
                ...state,
                items: actions.payload
            };
        case 'sort':
            console.log(actions.payload);
            return {
                ...state,
                items: actions.payload
            };
        default:
            return state;
    }
}
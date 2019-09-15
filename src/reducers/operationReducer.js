const initialState = {
    items: [],
    myWhistlist: []
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
        case 'addToWhistList':
            console.log("----");
            return {
                ...state,
                myWhistlist: [...state.myWhistlist, actions.payload]
            };
        default:
            return state;
    }
}
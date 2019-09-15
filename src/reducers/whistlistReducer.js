const initialState = {
    myWhistlist: []
}

export default function (state = initialState, actions) {
    console.log(state);
    switch (actions.type) {
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
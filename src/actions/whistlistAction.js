export const addToWhistList = (item) => dispatch => {
    console.log(item);
    dispatch({
        type: 'addToWhistList',
        payload: item
    })
};

export const searchAction = (searchText) => dispatch => {
    console.log("fetching " + searchText);
    var param = {
        'part': 'snippet',
        'maxResults': '10',
        'q': searchText,
        'key': 'AIzaSyBcNIzgd8-hYtbg4XG873e9sh2Aco1DSQw'
    }
    var url = 'https://www.googleapis.com/youtube/v3/search?';
    for (var key in param) {
        url = url + key + '=' + param[key] + '&';
    }
    fetch(url)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'fetch',
            payload: data.items
        }));
};

export const sortVideo = (items) => dispatch => {
    console.log(items);
    items.sort(function (a, b) {
        if (a.snippet.title == b.snippet.title) return 0;
        else return a.snippet.title > b.snippet.title ? 1 : -1;
    });
    items.pop();
    console.log(items);
    dispatch({
        type: 'sort',
        payload: items
    })
};

export const addToWhistList = (item) => dispatch => {
    console.log(item);
    dispatch({
        type: 'addToWhistList',
        payload: item
    })
};
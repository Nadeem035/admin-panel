const SetItem = (key, value) => {
    //
    localStorage.setItem(key, JSON.stringify(value));
    //
    return GetItem(key);
}

const GetItem = (key) => {
    //
    return localStorage.getItem(key) !== null ?
        localStorage.getItem(key).match(/{]/g) !== null ?
        JSON.parse(localStorage.getItem(key)) :
        localStorage.getItem(key) :
        null;
}

const RemoveItem = (key) => {
    //
    return localStorage.removeItem(key);
}

export default {
    SetItem,
    GetItem,
    RemoveItem,
}
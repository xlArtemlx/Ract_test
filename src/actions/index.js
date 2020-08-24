

const HotDogsLoaded = (newHotDogs) => {
    return {
        type: 'HOTDOG_LOADED',
        payload: newHotDogs
    };
}


export {
    HotDogsLoaded
}
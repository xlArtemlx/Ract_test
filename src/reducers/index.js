import { reducer as formReducer  } from 'redux-form';

const initialState = {
    hotDogs: [],
    form: formReducer
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HOTDOG_LOADED' : return {hotDogs:action.payload}
        default : return state
    }
    

    

}

export default reducer;
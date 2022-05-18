import { CARD_DATA } from "../actions/ActionTypes";

const initialState = {
    iotNum: false
}

export const CardReducer = (state = initialState, action) => {

    console.log('card reducer', action)
    switch (action.type) {
        case CARD_DATA:
            return {
                
            };
        default:
            return state;
    }
};
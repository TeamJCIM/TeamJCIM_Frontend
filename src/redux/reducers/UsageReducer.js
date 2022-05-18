import { USAGE_DATA } from "../actions/ActionTypes";

const initialState = {
    iotNum: false
}

export const UsageReducer = (state = initialState, action) => {

    console.log('usage reducer', action.data)
    switch (action.type) {
        case USAGE_DATA:
            return {
            };
        default:
            return state;
    }
};
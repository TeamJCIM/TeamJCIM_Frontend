import { POST_IOT_NUM } from "../actions/ActionTypes";

const initialState = {
    userId: 0,
    iotNum: ""
}

export const IotNumReducer = (state = initialState, action) => {

    console.log('iot num reducer', action.iotNum)
    switch (action.type) {
        case POST_IOT_NUM:
            return {
                ...state,
                userId: action.userId,
                iotNum: action.iotNum,
            };
        default:
            return state;
    }
};
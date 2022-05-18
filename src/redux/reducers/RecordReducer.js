import { RECORD_DATA } from "../actions/ActionTypes";

const initialState = {
    iotNum: false
}

export const RecordReducer = (state = initialState, action) => {

    console.log('record reducer', action.data)
    switch (action.type) {
        case RECORD_DATA:
            return {
                
            };
        default:
            return state;
    }
};
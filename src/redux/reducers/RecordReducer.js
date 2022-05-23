import { RECORD_DATA } from "../actions/ActionTypes";

const initialState = {
    iotNum: false
}

export const RecordReducer = (state = initialState, action) => {

    switch (action.type) {
        case RECORD_DATA:
            console.log('record reducer', action.data)
            let time = []

            for (let i = action.data.data[0].length - 1; i >= 0; i--) {
                time[i] = action.data.data[0][i].Date.substring(11, 19)
            }

            time = time.slice(time.length - 5, time.length - 1)


            console.log(action.data.data[0][0], action.data.data)

            console.log(action.data.data[0][0], action.data.data[0].length)

            console.log(action.data.data[0][0].Date.substring(11, 19))

            return {
                time: time,
            };
        default:
            return state;
    }
};
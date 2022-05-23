import { PREDICT_DATA } from "../actions/ActionTypes";

const initialState = {
    iotNum: false
}

export const PredictReducer = (state = initialState, action) => {

    switch (action.type) {
        case PREDICT_DATA:
            console.log('predict reducer', action.data)
            
            let pArray = []
            let iArray = []

            const pData = action.data.message[1];
            const iData = action.data.message[3];
            console.log(iData);

            for (let p in pData) {
                pArray.push(pData[p]['PredictData']);
            }

            for (let i in iData) {
                iArray.push(iData[i]['IotData']);
            }

            console.log('^_^', pData, iData, pArray, iArray)
            return {
                pArray: pArray,
                iArray: iArray,
            };
        default:
            return state;
    }
};
import { CARD_DATA } from "../actions/ActionTypes";

const initialState = {
    
}

export const CardReducer = (state = initialState, action) => {

    console.log('card reducer', action)
    switch (action.type) {
        case CARD_DATA:
            let iotData = action.data[0][0].IotData
            let predictData = action.data[1]
            let iotState = ""
            let electricData = []

            if (action.data[2].AlarmVoltage === 4
                || action.data[2].AlarmElectric === 2
                || action.data[2].AlarmLeakage === 2
                || action.data[2].AlarmArc === 1
                || action.data[2].AlarmTemperature === 1) {
                iotState = 'Danger'
            } else if (action.data[2].AlarmVoltage === 1
                || action.data[2].AlarmVoltage === 2
                || action.data[2].AlarmElectric === 1
                || action.data[2].AlarmLeakage === 1) {
                iotState ='Warning'
            } else {
                iotState = 'Success'
            }

            for (let i = 0; i < action.data[3].length; i++) {
                electricData[Math.floor(Number(action.data[3][i].Date.substr(11, 2)) / 2)] += Math.floor(action.data[3][i].VoltageAvg)
            }

            for (let i = 0; i < action.data[3].length; i++) {
                electricData[Math.floor(Number(action.data[3][i].Date.substr(11, 2)))] += Math.floor(action.data[3][i].VoltageAvg)
            }

            return {
                ...state,
                iotData: iotData,
                predictData: predictData,
                iotState: iotState,
                electricData: electricData,
            };
        default:
            return state;
    }
};
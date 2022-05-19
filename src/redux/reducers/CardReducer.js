import { CARD_DATA } from "../actions/ActionTypes";

const initialState = {
    
}

export const CardReducer = (state = initialState, action) => {

    switch (action.type) {
        case CARD_DATA:
            console.log('card reducer', action.data)

            let iotData = action.data[0][0].IotData
            let predictData = action.data[1]
            let iotStatus = ""
            let stateName = ""
            let electricData = Array.from({ length: 12 }, () => 0)

            // iot state
            if (action.data[2].AlarmVoltage === 4
                || action.data[2].AlarmElectric === 2
                || action.data[2].AlarmLeakage === 2
                || action.data[2].AlarmArc === 1
                || action.data[2].AlarmTemperature === 1) {
                iotStatus = 'danger'
                stateName = 'Danger'
            } else if (action.data[2].AlarmVoltage === 1
                || action.data[2].AlarmVoltage === 2
                || action.data[2].AlarmElectric === 1
                || action.data[2].AlarmLeakage === 1) {
                iotStatus = 'warning'
                stateName = 'Warning'
            } else {
                iotStatus = 'success'
                stateName = 'Safety'
            }

            // electric data
            for (let i = 0; i < action.data[3].length; i++) {
                electricData[Math.floor(Number(action.data[3][i].Date.substr(11, 2)) / 2)] += Math.floor(action.data[3][i].VoltageAvg)
            }

            return {
                ...state,
                iotData: iotData,
                predictData: predictData,
                iotStatus: iotStatus,
                stateName: stateName,
                electricData: electricData,
            };
        default:
            return state;
    }
};
import { CARD_DATA, CARD_DATA_YEST } from "../actions/ActionTypes";

const initialState = {
    
}

export const CardReducer = (state = initialState, action) => {

    switch (action.type) {
        case CARD_DATA:
            console.log('card reducer', action.data)

            let iotData = 0 // action.data[0][0].IotData
            let predictData = action.data[1]
            let iotStatus = ""
            let stateName = ""
            let electricData = Array.from({ length: 24 }, () => 0)

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
            console.log('action data length', action.data[3].length)
            // console.log(action.data[3][0].Date.substr(11, 2))
            for (let i = 0; i < action.data[3].length; i++) {
                electricData[Number(action.data[3][i].Date.substr(11, 2)) + 9] += Math.floor(action.data[3][i].VoltageAvg)
            }

            for (let i = 0; i < electricData.length; i++) {
                electricData[i] = Math.floor(electricData[i])
            }

            // iot data
            for (let i = 0; i < electricData.length; i++) {
                iotData += electricData[i]
            }

            return {
                ...state,
                iotData: iotData / 1000,
                predictData: predictData / 1000,
                iotStatus: iotStatus,
                stateName: stateName,
                electricData: electricData,
            };
        
        case CARD_DATA_YEST:
            console.log('card yesterday reducer', action.data)

            let electricDataYest = Array.from({ length: 24 }, () => 0)

            for (let i = 10; i < 13; i++) {
                electricDataYest[Number(action.data[3][i].Date.substr(11, 2)) - 10] += Math.floor(action.data[3][i].VoltageAvg)
            }

            for (let i = 1; i < 7; i++) {
                electricDataYest[Number(action.data[3][i].Date.substr(11, 2)) + 2] += Math.floor(action.data[3][i].VoltageAvg) / 2
            }

            for (let i = 0; i < electricDataYest.length; i++) {
                electricDataYest[i] = Math.floor(electricDataYest[i])
            }
        
            for (let i = 0; i < electricDataYest.length; i++) {
                electricDataYest[i] += electricData[i]
            }


            return {
                ...state,
                electricData: electricDataYest,
            }
        default:
            return state;
    }
};
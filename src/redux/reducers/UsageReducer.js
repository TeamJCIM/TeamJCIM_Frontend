import { USAGE_DATA } from "../actions/ActionTypes";

const initialState = {

}

export const UsageReducer = (state = initialState, action) => {

    switch (action.type) {
        case USAGE_DATA:
            console.log('usage reducer', action.data.data)

            let thisMonthData = Array.from({ length: 12 }, () => 0)
            let lastMonthData = Array.from({ length: 12 }, () => 0)
            let yearData = Array.from({ length: 31 }, () => 0)
            
            // this month
            for (let i = 0; i < action.data.data[1].length; i++) {
                const day = Number(action.data.data[1][i].Date.substr(8, 2))

                if (action.data.data[1][i]) {
                    thisMonthData[day] = action.data.data[1][i].IotData
                }
            }

            // last month
            for (let i = 0; i < action.data.data[2].length; i++) {
                const day = Number(action.data.data[2][i].Date.substr(8, 2))

                if (action.data.data[2][i]) {
                    lastMonthData[day] = action.data.data[2][i].IotData
                }
            }

            // year
            for (let i = 0; i < action.data.data[3].length; i++) {
                const day = action.data.data[3][i].Month - 1
                yearData[day] = Number(action.data.data[3][i].IotData)
            }

            return {
                ...state,
                thisMonthData: thisMonthData,
                lastMonthData: lastMonthData,
                yearData: yearData,
            };
        default:
            return state;
    }
};
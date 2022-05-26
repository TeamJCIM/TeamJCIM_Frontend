import axios from "axios";
import { CLICK_OPEN_MENU, POST_IOT_NUM, CARD_DATA, USAGE_DATA, RECORD_DATA, PREDICT_DATA, CARD_DATA_YEST,  } from "./ActionTypes";

export const clickMenuOpen = value => ({
    type: CLICK_OPEN_MENU,
    newValue: value
});

export const postIotNum = (userId, iotNum) => ({
    type: POST_IOT_NUM,
    userId: userId,
    iotNum: iotNum,
})

export const getCardData = data => ({ 
    type: CARD_DATA,
    data: data,
})

export const getCardDataAsync = (iotNum) => {
    return (dispatch) => {
        axios.get(`/api/overview/${iotNum}/2022-05-26`,)
            .then((response) => {
                console.log('card data async >>', response)

                dispatch(getCardData(response.data.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const getCardDataYest = data => ({
    type: CARD_DATA_YEST,
    data: data,
})

export const getCardDataYestAsync = (iotNum) => {
    return (dispatch) => {
        axios.get(`/api/overview/${iotNum}/2022-05-25`,)
            .then((response) => {
                console.log('card data yesterday async >>', response)

                dispatch(getCardData(response.data.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const getUsageData = data => ({
    type: USAGE_DATA,
    data: data,
})

export const getUsageDataAsync = (iotNum) => {
    return (dispatch) => {
        axios.get(`/api/lookup_elec/${iotNum}`)
        .then((response)=>{
            console.log('usage async >>', response)
            dispatch(getUsageData(response.data))
        })
        .catch((error) => {
            console.log('error >>', error)
        })
    }
}

export const getRecordData = data => ({
    type: RECORD_DATA,
    data: data,
})

export const getRecordDataAsync = iotNum => {
    return (dispatch) => {
        axios.get(`/api/scheduler/IotDangerStatus/${iotNum}`)
        .then((response) => {
            console.log('record async >>', response.data)
            dispatch(getRecordData(response.data))
        })
        .catch((error) => {
            console.log('error >>', error)
        })
    }
}

export const getPredictData = data => ({
    type: PREDICT_DATA,
    data: data,
})

export const getPredictDataAsync = iotNum => {
    return (dispatch) => {
        axios.get(`/api/predict/predictNextMonth_tmp/${iotNum}`)
        .then((response) => {
            console.log('predict async >>', response.data)
            dispatch(getPredictData(response.data))
        })
        .catch((error) => {
            console.log('error >>', error)
        })
    }
}
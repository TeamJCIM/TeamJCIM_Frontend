import axios from "axios";
import { CLICK_OPEN_MENU, POST_IOT_NUM, CARD_DATA, USAGE_DATA, RECORD_DATA  } from "./ActionTypes";

export const clickMenuOpen = value => ({
    type: CLICK_OPEN_MENU,
    newValue: value
});

export const postIotNum = iotNum => ({
    type: POST_IOT_NUM,
    iotNum: iotNum,
})

export const getCardData = data => ({ 
    type: CARD_DATA,
    data: data,
})

export const getCardDataAsync = (iotNum) => {

    return (dispatch) => {
        axios.get(`/api/overview/${iotNum}/2021-09-05`,)
            .then((response) => {
                console.log('card data async >>', response.data.data)

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
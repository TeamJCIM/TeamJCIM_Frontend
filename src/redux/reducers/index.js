import { combineReducers } from 'redux';
import { MenuOpenReducer } from './MenuOpenReducer';
import { CardReducer } from './CardReducer';
import { IotNumReducer } from './IotNumReducer';
import { UsageReducer } from './UsageReducer';
import { RecordReducer } from './RecordReducer';
import { PredictReducer } from './PredictReducer';

export const Reducers = combineReducers({ 
  iotNumState : IotNumReducer,
  menuState : MenuOpenReducer,
  cardState : CardReducer,
  usageState : UsageReducer,
  recordState : RecordReducer,
  predictState : PredictReducer,
});
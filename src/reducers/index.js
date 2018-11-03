import { combineReducers } from 'redux';
import WeaterReducer from './reducer_weather';

const rootReducer = combineReducers({
    eather: WeaterReducer
});

export default rootReducer;

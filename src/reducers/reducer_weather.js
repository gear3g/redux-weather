import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
    var result = null;

    switch (action.type) {
        case FETCH_WEATHER:
        result = [ action.payload.data, ...state ];
        break;

        default:
            result = state;
            break;
    }

    return result;
}
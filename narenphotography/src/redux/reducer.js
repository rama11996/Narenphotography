import {BUSES} from '../shared/buses';
import { BUSESDETAIL } from '../shared/busdetails';

export const initialState = {
    buses: BUSES,
    busdetails: BUSESDETAIL
};

export const Reducer = (state = initialState, action) => {
    return state;
};
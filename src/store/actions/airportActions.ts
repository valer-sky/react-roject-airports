import { IAirport, ServerResponse } from '../../models/models';
import { AppDispatch } from '../index';

import axios from "../../axios"
import { airportSlice } from '../slices/airportSlice';

export const fetchAirports = (page: number = 1, count: number = 50) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(airportSlice.actions.fetching())
          const response = await axios.get<ServerResponse<IAirport>>('airports', {
            params: {page, count}
          });
          dispatch(airportSlice.actions.fetchSucces(
            response.data.results
          ))
        } catch(e) {
            dispatch(airportSlice.actions.fetchError(e as Error))
        }
    }
}
import { IAirportType, IAirportRegion, IAirportCountry } from './../../models/models';

import { AppDispatch } from '../index';

import axios from "../../axios"

import { handBookSlice } from '../slices/HandBookSlice';

export const fetchHandbooks = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(handBookSlice.actions.fetching())
          const response = await Promise.all([
            axios.get<IAirportType[]>('handbooks/airport-types'),
            axios.get<IAirportRegion[]>('handbooks/regions'),
            axios.get<IAirportCountry[]>('handbooks/countries'),

          ]);
          dispatch(handBookSlice.actions.fetchSucces({
            types: response[0].data,
            regions: response[1].data,
            countries: response[2].data,
          }
            
          ))
        } catch(e) {
            
        }
    }
}
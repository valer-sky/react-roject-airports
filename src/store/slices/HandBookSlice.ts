import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IAirport, IAirportCountry, IAirportRegion, IAirportType } from "../../models/models"

interface HandBookState {
    loading: boolean,
    types: IAirportType[],
    regions: IAirportRegion[],
    countries: IAirportCountry[]
    

}

const initialState: HandBookState = {
    loading: false,
    regions: [],
    countries: [],
    types: []
}
interface HandbookPayload {
    types: IAirportType[],
    countries: IAirportCountry[],
    regions: IAirportRegion[]
}


export const handBookSlice = createSlice({
    name: 'handbook',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSucces(state, action: PayloadAction<HandbookPayload>) {
            state.loading = false;
            state.types = action.payload.types;
            state.regions = action.payload.regions;
            state.countries = action.payload.countries;
            // state.types = action.payload.airports;
            

        },
       
    }
})

export default handBookSlice.reducer;
import React, { useEffect } from 'react';

import { fetchAirports } from '../store/actions/airportActions';
import { AirportCard } from '../components/AirportCard';
import { AirportFilter } from '../components/AirportFilter';
import { AirportSearch } from '../components/AirportSearch';
import { useAppDispatch, useAppSelector } from '../hook/redux';

export function MainPage() {
    const dispatch = useAppDispatch();
    const {airports, error, loading } = useAppSelector(state => state.airport)
    

    useEffect(() => {
        dispatch(fetchAirports())
    }, []);

    return(
        <div className="conteiner mx-auto max-w-[760px] pt-5">
            <AirportSearch />

            <AirportFilter />
            { loading && <p className="text-center text-lg">Loading...</p>}
            { error && <p className="text-center text-red-600">{error}</p>}
            {
                airports.map(airport => <AirportCard key={airport.id} airport={airport} />)
            }
            
            
        </div>
    )
}
import React, { useEffect, useRef } from 'react';

import { fetchAirports } from '../store/actions/airportActions';
import { AirportCard } from '../components/AirportCard';
import { AirportFilter } from '../components/AirportFilter';
import { AirportSearch } from '../components/AirportSearch';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 50;

export function MainPage() {
    const dispatch = useAppDispatch();
    const {airports, error, loading, count} = useAppSelector(state => state.airport)
    const page = useRef(1);

    const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

    const pageChangeHandler = ({selected}: {selected: number}) => {
        page.current = selected + 1;
        dispatch(fetchAirports(page.current, ITEMS_PER_PAGE));
    }
    

    useEffect(() => {
        dispatch(fetchAirports(page.current, ITEMS_PER_PAGE))
    }, [dispatch]);

    return(
        <div className="conteiner mx-auto max-w-[760px] pt-5">
            <AirportSearch />

            <AirportFilter />
            { loading && <p className="text-center text-lg">Loading...</p>}
            { error && <p className="text-center text-red-600">{error}</p>}

            {
                airports.map(airport => <AirportCard key={airport.id} airport={airport} />)
            }

            { pageCount && <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={pageChangeHandler}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            forcePage={page.current - 1}
            previousLabel="<"
            containerClassName="flex"
            pageClassName="border py-1 px-3 mr-2"
            activeClassName="bg-blue-500 text-white"
            previousClassName="border py-1 px-3 mr-2"
            nextClassName="border py-1 px-3"
          /> }
            
            
        </div>
    )
}
import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import { useDebounce } from '../hook/debounce';
import { useInput } from '../hook/input';
import { IAirport, ServerResponse } from '../models/models';

export function AirportSearch() {
    const input = useInput('');
    const [airports, setAirports] = useState<IAirport[]>([])
    const navigate = useNavigate();
    const debounced = useDebounce<string>(input.value, 400)
    
    const [dropdown, setDropdown] = useState(false)

    async function searchAiroports() {
        const response = await axios.get<ServerResponse<IAirport>>(`airports`, {
            params: {
                search:debounced,
                count: 10
            },
        })
        setAirports(response.data.results)
    }

    useEffect(() => {
        if (debounced.length >= 3) {
            searchAiroports().then(() => setDropdown(true))
        } else {
          setDropdown(false)
        }
      }, [debounced])
    return(
        <div className="mb-4 relative">
            <input type="text"
            className="border py-2 px-4 outline-0 w-full h-[42px]"
            placeholder='Type something here...'
            {...input}
            />

{ dropdown && <ul className="list-none absolute left-0 right-0 h-[200px] top-[42px] shadow-md bg-white overflow-y-scroll">
                {
                    airports.map(airport => (
                        <li
        key={airport.id}
        onClick={() => navigate(`/airport/${airport.id}`)}
        className="cursor-pointer hover:bg-gray-500 hover:text-white py-2 px-4"
       >{airport.name}</li>
                    ))
                }
            </ul>}
        </div>
    )
}
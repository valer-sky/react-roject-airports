import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { IAirportDetail } from '../models/models';

export function AirportDitailPage() {
    const params = useParams<'id'>();
    const [airport, setAirport] = useState<IAirportDetail | null>(null);
    const [loading, setLoading] = useState(true);

    async function fetchDetailAirport() {
        const response = await axios.get<IAirportDetail>(`/airports/${params.id}`)
        setAirport(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchDetailAirport() 
    })

    if(loading) return <p className="text-center">Loading...</p>
    return(
        <div className="conteiner mx-auto pt-5 max-w-[760px}">
            <h1 className="text-center text-2xt">{airport?.name}</h1>
            <p className="text-center text-1xt">{airport?.country}</p>
            <p className="text-center text-1xt">{airport?.type}</p>
        </div>
        
    )
}
import React from 'react';
import { useParams } from 'react-router-dom';

export function AirportDitailPage() {
    const params = useParams<'id'>();
    return(
        <div className="conteiner mx-auto pt-5 max-w-[760px}">
            <h1>Airport {params.id}</h1>
        </div>
        
    )
}
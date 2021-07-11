import React, { useState, useEffect } from 'react';
import { EventHelper } from './EventHelper';
import axios from 'axios';

export const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/home/events/upcoming')
            .then((res) => {
                setEvents(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            {
                events ? events.map(e => {
                    return <EventHelper eventObj={e}/>
                }) : null
            }
        </>
    );
}

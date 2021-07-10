import React, { useState, useEffect } from 'react';
import { EventHelper } from './EventHelper';
import axios from 'axios';

export const Events = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);

    useEffect(() => {
        axios.get('/events/upcoming')
            .then((res) => {
                setUpcomingEvents(res.data);
            })
            .catch(err => console.log(err));
        
        axios.get('/events/past')
            .then((res) => {
                setPastEvents(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="m-2">
                <div className="fs-2">UpComing Events</div>
                {
                    upcomingEvents ? upcomingEvents.map(e => {
                        return <EventHelper eventObj={e}/>
                    }) : "No Upcoming Events"
                }
            </div>
            <div className="m-2">
                <div className="fs-2">UpComing Events</div>
                {
                    upcomingEvents ? upcomingEvents.map(e => {
                        return <EventHelper eventObj={e}/>
                    }) : "No Upcoming Events"
                }
            </div>
        </>
    );
}
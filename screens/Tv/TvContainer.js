import React, { useEffect, useState } from 'react';
import TvPresenter from './TvPresenter';
import { tvApi } from '../../api';

export default () => {
    const [shows, setShows] = useState({
        loading: true,
        today: [],
        todayError: null,
        thisWeek: [],
        thisWeekError: null,
        topRated: [],
        topRatedError: null,
        popular: [],
        popularError: null
    });

    const getData = async() => {
        const [today, todayError] = await tvApi.today();
        const [thisWeek, thisWeekError] = await tvApi.thisWeek();
        const [topRated, topRatedError] = await tvApi.topRated();
        const [popular, popularError] = await tvApi.popular();

        setShows({
            loading: false,
            today,
            thisWeek,
            topRated,
            popular,
            todayError,
            thisWeekError,
            topRatedError,
            popularError
        })
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <TvPresenter refreshFn={getData} {...shows}/>
    );
};
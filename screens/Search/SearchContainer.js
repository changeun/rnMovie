import React, { useState } from 'react';
import { movieApi, tvApi } from '../../api';
import SearchPresenter from './SearchPresenter';

export default () => {
    const [keyword, setKeyword] = useState("");
    const [results, setResult] = useState({
       movies: [],
       shows: [],
       movieError: null,
       showError: null 
    });
    const onChange = (text) => setKeyword(text);
    const search = async () => {
        if (keyword === "") {
            return;
        }
        const [movies, movieError] = await movieApi.search(keyword);
        const [shows, showError] = await tvApi.search(keyword);
        setResult({
            movies,
            shows,
            movieError,
            showError
        })
    }
    
    return (
        <SearchPresenter
            {...results}
            onChange={onChange}
            onSubmit={search}
            keyword={keyword}
        />
    );
};
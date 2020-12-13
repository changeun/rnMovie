import React from 'react';
import styled from 'styled-components/native';
import Vertical from '../../components/Vertical';
import HorizontalSlider from '../../components/HorizontalSlider';
import Input from '../../components/Search/input';
import ScrollContainer from '../../components/ScrollContainer';


export default ({ movies, shows, keyword, onChange, onSubmit }) => (
    <ScrollContainer
        refreshFn={onSubmit}
        loading={false}
        contentContainerStyle={{
            paddingTop: 10        
        }}
    >
        <Input 
            placeholder={"Write a keyword"} 
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
        {movies.length !== 0 && ( 
            <HorizontalSlider title={"Movie results"}>
                {movies.map(movie => (
                    <Vertical 
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster_path || movie.backdrop_path}
                        votes={movie.vote_average}
                    />
                ))}
            </HorizontalSlider>
        )}
        {shows.length !== 0 && (
            <HorizontalSlider title={"TV results"}>
                {shows.map(show => (
                   <Vertical 
                        key={show.id}
                        id={show.id}
                        title={show.name}
                        poster={show.poster_path || show.backdrop_path}
                        votes={show.vote_average}
                    />
                ))}
            </HorizontalSlider>
        )}
    </ScrollContainer>
);
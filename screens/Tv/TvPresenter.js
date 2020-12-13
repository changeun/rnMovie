import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Horizontal from '../../components/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';
import ScrollContainer from '../../components/ScrollContainer';
import Vertical from '../../components/Vertical';
import List from '../../components/List';
import Swiper from 'react-native-web-swiper';
import Slide from '../../components/Tv/Slider';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 4}px;
    margin-bottom: 50px;
`;

export default ({ loading, popular, topRated, today, thisWeek }) => (
    <ScrollContainer loading={loading}>
       <HorizontalSlider title="Popular Shows">
            {popular.map(show => (
                <Vertical
                    id={show.id}
                    key={show.id}
                    poster={show.poster_path}
                    title={show.name}
                    votes={show.vote_average}
                />
            ))}
       </HorizontalSlider>
       <SliderContainer>
            <Swiper controlsEnabled={false} loop timeout={3}>
                {thisWeek.map(show => (
                    <Slide
                        key={show.id}
                        id={show.id}
                        title={show.name}
                        overview={show.overview}
                        backgroundImage={show.backdrop_path}
                        poster={show.poster_path} 
                    />
                ))}
            </Swiper>
        </SliderContainer>
        <HorizontalSlider title="Top Rated">
            {topRated.map(show => (
                <Vertical
                    id={show.id}
                    key={show.id}
                    poster={show.poster_path}
                    title={show.name}
                    votes={show.vote_average}
                />
            ))}
       </HorizontalSlider>
       <List title="Airing Today">
            {today.map(show => (
                <Horizontal 
                    key={show.id}
                    id={show.id}
                    title={show.name}
                    poster={show.poster_path}
                    overview={show.overview}
                />
            ))}
       </List>
    </ScrollContainer>
)
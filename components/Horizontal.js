import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import { trimText } from '../utils';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 30px;
    margin-bottom: 30px;
`;
const Data = styled.View`
    align-items: flex-start;
    width: 60%;
    margin-left: 20px;
`;
const Title = styled.Text`
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Overview = styled.Text`
    margin-top: 10px;
    color: white;
`;

const ReleaseDate = styled.Text`
    color: white;
    font-size: 12px;
`;

const Horizontal = ({id, title, releaseDate, overview, poster}) => (
    <TouchableOpacity>
        <Container>
            <Poster url={poster} />
            <Data>
                <Title>{trimText(title, 30)}</Title>
                {releaseDate ? <ReleaseDate>{releaseDate}</ReleaseDate> : null}
                <Overview>{trimText(overview, 130)}</Overview>
            </Data>
        </Container>
    </TouchableOpacity>
);

Horizontal.propTypes= {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string
}

export default Horizontal;
import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { apiImage } from '../../api';
import Poster from '../Poster';
import { TouchableOpacity } from 'react-native';
import { trimText } from '../../utils';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
    height: 100%;
    width: 100%;
`;

const BG = styled.Image`
    height: 100%;
    width: 100%;
    opacity: 0.4;
    position: absolute; // 이미지를 맨 뒤로 해서 아래 데이터들이 이미지 위에 겹치도록 하기 위해.
`;

const Content = styled.View`
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
const Data = styled.View`
    width: 50%;
    align-items: flex-start;
`;
const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 7px;
`;
const Overview = styled.Text`
    color: rgb(220, 220, 220);
    font-size: 14px;
    font-weight: 500;
`;

const Button = styled.View`
    margin-top: 10px;
    background-color: #e74c3c;
    padding: 7px 10px;
    border-radius: 3px;
`;

const ButtonText = styled.Text`
    color: white;
`;

const Slide = ({ id, title, backgroundImage, overview, poster }) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", { 
            id,
            title,
            overview,
            poster
        });
    }
    return (
        <Container>
            <BG source={{uri: apiImage(backgroundImage)}} />
            <Content>
                <Poster url={poster} />
                <Data>
                    <Title>{trimText(title, 40)}</Title>
                    <Overview>{trimText(overview, 110)}</Overview>
                    <TouchableOpacity onPress={goToDetail}>
                        <Button>
                            <ButtonText>View details</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </Data>
            </Content>
        </Container>
    );
}

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Slide;
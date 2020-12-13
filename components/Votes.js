import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.Text`
    color: rgb(220, 220, 220);
    margin-bottom: 7px;
    font-size: 12px;
`;

const Votes = ({votes}) => <Container>🌟 {votes} / 10</Container>;

export default Votes;
import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextInput = styled.TextInput`
    margin-top: 50px;
    background-color: white;
    margin: 0px 30px;
    padding: 5px 20px;
    border-radius: 15px;
    margin-bottom: 50px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
    <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        onSubmitEditing={onSubmit}
        returnKeyType={"search"}
    />
);

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Input;
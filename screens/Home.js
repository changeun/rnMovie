import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navitaion }) => (
    <View>
        <Text>Movies</Text>
        <Button 
            title="Go to Detail"
            onPress={() => navitaion.navigate("Detail")}  
        />
    </View>
);
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Movies from '../screens/Movies/MoviesContainer';
import Tv from '../screens/Tv/TvContainer';
import Search from '../screens/Search/SearchContainer';
import Favs from '../screens/Favs';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();
const getHeaderName = route => 
    route?.state?.routeNames[route.state.index] || "Movies";

export default ({navigation, route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: getHeaderName(route)
        });
    }, [route]);
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if(route.name === "Movies") {
                        iconName += "film";
                    } else if(route.name === "TV") {
                        iconName += "tv";
                    } else if(route.name === "Search") {
                        iconName += "search";
                    } else if(route.name === "Discovery") {
                        iconName += "heart";
                    }
                    return (
                        <Ionicons 
                            name={iconName}
                            color={focused ? "white" : "grey"} 
                            size={26} 
                        />
                    );
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style:{
                    backgroundColor: 'black',
                    borderTopColor: 'black'
                }
            }}>
            <Tab.Screen name="Movies" component={Movies} />
            <Tab.Screen name="TV" component={Tv} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Discovery" component={Favs} />
        </Tab.Navigator>
    );
}
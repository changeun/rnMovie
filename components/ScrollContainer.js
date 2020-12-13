import React, { useState }from 'react';
import PropTypes from 'prop-types';
import { ScrollView, ActivityIndicator, RefreshControl } from 'react-native';

const ScrollContainer = ({ loading, children, contentContainerStyle, refreshFn }) => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async() => {
        setRefreshing(true);
        await refreshFn();
        setTimeout(() => setRefreshing(false), 5000);
    }
    return(
        <ScrollView
            refreshControl={
                <RefreshControl
                    onRefresh={onRefresh}
                    tintColor={"white"} 
                    enabled={false}
                    refreshing={refreshing}
                />
            }
            style={{ backgroundColor: "black" }}
            contentContainerStyle={{
                justifyContent: loading ? "center" : "flex-start",
                ...contentContainerStyle
            }}
        >
            {loading ? <ActivityIndicator color="white" size="large" /> : children}
        </ScrollView>
    );
};

ScrollContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    contentContainerStyle: PropTypes.object,
    refreshFn: PropTypes.func
}

export default ScrollContainer;
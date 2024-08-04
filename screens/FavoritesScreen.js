import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Weather from '../components/Weather';
import BackgroundLayout from '../components/BackgroundLayout';

const FavoritesScreen = () => {
    const favorites = useSelector((state) => state.favorites);

    return (
        <BackgroundLayout>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Weather weather={item} />}
            />
        </BackgroundLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default FavoritesScreen;

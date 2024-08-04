import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favoritesSlice';

const Weather = ({ weather }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const isFavorite = favorites.some((city) => city.id === weather.id);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(weather));
    };

    const { name, main, weather: weatherDetails } = weather;
    const { temp } = main;
    const { description, icon } = weatherDetails[0];
    const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

    return (
        <View style={styles.container}>
            <Text style={styles.city}>{name}</Text>
            <Text style={styles.temperature}>{temp}°C</Text>
            <Text style={styles.description}>{description}</Text>
            <Image source={{ uri: iconUrl }} style={styles.icon} />
            <Button
                title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                onPress={handleToggleFavorite}
                color={isFavorite ? "red" : "green"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
    },
    city: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    temperature: {
        fontSize: 32,
        color: '#333',
    },
    description: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#666',
    },
    icon: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
});

export default Weather;

import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Weather from '../components/Weather';
import BackgroundLayout from '../components/BackgroundLayout';

const apiKey = 'e9b99aa5f0e681abeab9e95edb932b81';

const CitiesScreen = () => {
    const [city, setCity] = useState('');
    const [citiesWeather, setCitiesWeather] = useState([]);

    const addCityWeather = async () => {
        if (city.trim()) {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                setCitiesWeather((prevCities) => [...prevCities, response.data]);
                setCity('');
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <BackgroundLayout>
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                value={city}
                onChangeText={setCity}
            />
            <Button title="Add City" onPress={addCityWeather} />
            <FlatList
                data={citiesWeather}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Weather weather={item} />
                )}
            />
        </BackgroundLayout>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
});

export default CitiesScreen;

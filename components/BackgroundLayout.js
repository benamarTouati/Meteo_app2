import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const BackgroundLayout = ({ children }) => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
            <View style={styles.container}>
                {children}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default BackgroundLayout;

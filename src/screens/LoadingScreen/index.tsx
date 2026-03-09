import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import LoadingLogo from './LoadingLogo';


const LoadingScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <LoadingLogo />
            <ActivityIndicator size="large" color="#F2B705" style={styles.spinner} />
        </View>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    spinner: {
        marginTop: 20,
    },
});
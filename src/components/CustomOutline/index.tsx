import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    title: string;
    onPress?: () => void; 
};

export default function CustomOutline({ title, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: '#F2B705',
        paddingVertical: 12,
        paddingHorizontal: 100,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        color: '#F2B705',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
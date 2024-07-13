// CustomText.js
import { useFonts } from 'expo-font';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ style, ...props }) => {
    const loaded = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
    })
    if(!loaded) {
        return null
    }
    return <Text style={[styles.text, style]} {...props} />;
};


const styles = StyleSheet.create({
    text: {
        color:"#2A2A2A",
        fontFamily: 'Montserrat',
    },
});

export default CustomText;

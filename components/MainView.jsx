import { useFonts } from 'expo-font';
import { View, Text, Image, StyleSheet } from "react-native";

const MainView = () => {
    const loaded = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
    })
    if(!loaded) {
        return null
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Headphones.png')} style={styles.backgroundImage} />
            <View style={styles.bgImageText}><Text style={{ color: "#FAFAFA", fontFamily: "Montserrat", fontSize: 30 }}>Premium Sound, Premium Savings</Text>
            <Text style={{ color: "#FAFAFA", paddingTop:15, fontFamily: "Montserrat", fontSize: 15}}>Limited offer, hope you get yours now</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
    },
    backgroundImage: {
        width: "100%",
        borderRadius: 20
    },
    bgImageText: {
        position: "absolute",
        paddingHorizontal: 30,
    }
})
export default MainView;
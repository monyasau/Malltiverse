import React from 'react';
import { StyleSheet,TextInput, TouchableOpacity, View, Image } from "react-native";
import Text from "./CustomText";
import { Path, Svg } from 'react-native-svg';

function Cart({ cart, setCart,setScreen }) {


    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Text style={{ fontSize: 20, color: "#2A2A2A" }}>
                    My Shopping Cart
                </Text>
                <Text style={{ fontSize: 16 }}>{cart.length} Items</Text>
            </View>
            {cart.length === 0 ? (
                <View style={style.main}>
                    <Text style={{ fontSize: 20 }}>No Item in Cart</Text>
                </View>
            ) : (
                <View style={style.main}>
                    {cart.map((product, index) => (
                        <View style={style.cartItem}>
                            <View key={index} style={style.cartItemMain}>
                                <Image source={product.image} style={style.image} resizeMode="contain" />
                                <View style={{ flex: 1 }}>
                                    <Text>{product.name}</Text>
                                    <Text style={{ fontSize: 11, fontWeight: "400", paddingVertical: 10 }}>{product.description}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", width: "45%", }}>
                                        <TouchableOpacity
                                            onPress={() => count++}
                                            style={style.addButton}
                                        >
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                        <Text>1</Text>
                                        <TouchableOpacity
                                            onPress={() => count - 1}
                                            style={style.removeButton}
                                        >
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: "space-between", flexDirection: "column", height: 100, alignItems: "flex-end" }}>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M15.75 4.48486C13.2525 4.23736 10.74 4.10986 8.235 4.10986C6.75 4.10986 5.265 4.18486 3.78 4.33486L2.25 4.48486" stroke="#2A2A2A" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275" stroke="#2A2A2A" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M14.1373 6.85498L13.6498 14.4075C13.5673 15.585 13.4998 16.5 11.4073 16.5H6.5923C4.4998 16.5 4.4323 15.585 4.3498 14.4075L3.8623 6.85498" stroke="#2A2A2A" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M7.74707 12.375H10.2446" stroke="#2A2A2A" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M7.125 9.375H10.875" stroke="#2A2A2A" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </Svg>
                                <Text style={{ fontSize: 16 }}>{product.price}</Text>

                            </View>
                        </View>
                    ))}
                    <View style={style.summary}>
                        {/* <Text>Shopping Summary</Text> */}
                        {/* <View style={{ marginTop: 20, flexDirection: "column" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>Delivery</Text>
                            <TextInput style={{ borderWidth: 1, borderColor: "#2A2A2A", borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5, marginBottom: 10 }}
                            />
                        </View> */}
                          <TouchableOpacity
                        style={{  marginRight: "auto", alignItems: "center",width:"100%", padding: 10, borderRadius: 10, backgroundColor: "#FF7F7D" }}
                        onPress={() => setScreen("checkout")}
                    >
                        <Text>
                        Checkout
                        </Text>
                    </TouchableOpacity>
                    </View>
                    </View>
            )}
                </View>
            );
}

            const style = StyleSheet.create({
                container: {
                height: "100%",
            backgroundColor: "#fff",
    },
            topBar: {
                flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
    },
            main: {
                flex: 1,
            alignItems: "center",
            justifyContent: "center",
    },
            cartItem: {
                flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 30,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#EDEDEDAB",
    },
            cartItemMain: {
                flexDirection: "row",
            alignItems: "center",
            width: "70%",
    },
            summary:{
                flex:1,
    },
            image: {
                width: 60,
            height: 60,
            marginRight: 10,
    },
            addButton: {
                borderColor: "#2A2A2A",
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
    },
            removeButton: {
                borderColor: "#2A2A2A",
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
    },
});

            export default Cart;

import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from './CustomText';
import { Path, Svg } from "react-native-svg";

const ProductGroup = ({ category, products, cart, setCart }) => {
    const renderRating = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Svg key={i} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path
                        d="M8.23009 0.922852L10.1298 6.76963H16.2775L11.3039 10.3831L13.2037 16.2299L8.23009 12.6164L3.25653 16.2299L5.15626 10.3831L0.182692 6.76963H6.33036L8.23009 0.922852Z"
                        fill={i < rating ? "#FFC657" : "#E0E0E0"}
                    />
                </Svg>
            );
        }
        return <View style={{ flexDirection: 'row', gap: 2 }}>{stars}</View>;
    };

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter((item) => item.name !== product.name));
    };

    const isInCart = (product) => {
        return cart.some((item) => item.name === product.name);
    };

    return (
        <View style={style.container}>
            <View style={{ flexDirection: "row", gap: 10, marginBottom: 20, alignItems: "center" }}>
                <View style={{ height: 30, width: 5, backgroundColor: "#FF5454D9", borderRadius: 4 }} />
                <Text style={{ fontSize: 20, fontWeight: "600", color: "#2A2A2A" }}>{category}</Text>
            </View>
            <View style={style.productContainer}>
                {products.map((product, index) =>
                (<View key={index} style={style.product}>
                    <View style={style.imageContainer}>
                        <Image resizeMode="contain" source={product.image} style={style.image} />
                    </View>
                    <Text style={{ color: "#2A2A2A", }}>{product.name}</Text>
                    <View>
                        {renderRating(product.rating)}
                    </View>
                    <Text style={{ fontSize: 12 }}>{product.description}</Text>
                    <Text style={{ color: "#FF7F7D", fontSize: 13 }}>{product.price}</Text>
                    <TouchableOpacity
                        style={{ borderWidth: 1, marginRight: "auto", alignItems: "center", padding: 10, borderRadius: 10, borderColor: "#FF7F7D" }}
                        onPress={() => isInCart(product) ? handleRemoveFromCart(product) : handleAddToCart(product)}
                    >
                        <Text>
                            {isInCart(product) ? 'Remove from cart' : 'Add to cart'}
                        </Text>
                    </TouchableOpacity>
                </View>)
                )}
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginVertical: 50,
    },
    productContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    product: {
        justifyContent: "space-between",
        gap: 7,
        width: "48%",
        borderRadius: 20,
        marginBottom: 20
    },
    imageContainer: {
        borderRadius: 5,
        paddingHorizontal: 30,
        paddingVertical: 0,
        backgroundColor: "#EDEDED",
    },
    image: {
        width: "100%",
        height: 200
    }
});

export default ProductGroup;

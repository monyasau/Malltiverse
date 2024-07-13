import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./CustomText";

function Cart({ cart, setCart }) {
    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Text style={{ fontSize: 20, color: "#2A2A2A" }}>
                    My Shopping Cart
                </Text>
                <Text style={{ fontSize: 16 }}>{cart.length} Items</Text>
            </View>
            {cart.length == 0 ? (
                <View style={style.main}>
                    <Text style={{ fontSize: 20 }}>No Item in Cart</Text>
                    <TouchableOpacity
                        onPress={() => setCart([0, 1, 2])}
                        style={style.addButton}
                    >
                        <Text>Add items to cart</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={style.main}>
                    <View style={style.card}>
                        <Text>Card</Text>
                    </View>
                </View>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor:"#000"
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    addButton: {
        borderColor: "#FF7F7D",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    card: {
        height: "33%",
        width: "100%",
    },
});

export default Cart;

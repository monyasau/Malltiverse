import { View, StyleSheet } from "react-native";
import Text from './CustomText';
const ProductGroup = ({ category, products }) => {
    console.log(category);
    return (
        <View style={style.container}>
            <View style={{ flexDirection: "row", gap: 10,marginBottom:20, alignItems: "center" }}>
                <View style={{ height: 30, width: 5, backgroundColor: "#FF5454D9", borderRadius: 4 }} />
                <Text style={{fontSize: 20, fontWeight: "600", color: "#2A2A2A" }}>{category}</Text>
            </View>
            <View style={style.productContainer}>
            {products.map((product, index) =>
            (<View key={index} style={style.product}>
                <Text style={{ color: "#2A2A2A", fontWeight: "600", fontSize: 20 }}>{product.name}</Text>
                <Text>{product.price}</Text>
                <Text>{product.rating}</Text>
                <Text>{product.description}</Text>
            </View>)
            )}
            </View>
            <View>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        marginTop: 50
    },
    productContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    product: {
        width:"48%",
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 20,
        padding: 10,
        marginBottom: 20
    }
})

export default ProductGroup;
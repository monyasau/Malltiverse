import { Image, TextInput, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import Text from "./CustomText";
import { Circle, Path, Svg } from "react-native-svg";
import { useState } from "react";

function Payment({ setScreen }) {
    const [cardNumber, setCardNumber] = useState('');
    const [paySuccess, setPaySuccess] = useState(false);
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardNumberError, setCardNumberError] = useState('');
    const [expiryDateError, setExpiryDateError] = useState('');
    const [cvvError, setCvvError] = useState('');

    const validateInputs = () => {
        let valid = true;

        if (!cardNumber) {
            setCardNumberError('Card number is required');
            valid = false;
        } else {
            setCardNumberError('');
        }

        if (!expiryDate) {
            setExpiryDateError('Expiry date is required');
            valid = false;
        } else {
            setExpiryDateError('');
        }

        if (!cvv) {
            setCvvError('CVV is required');
            valid = false;
        } else {
            setCvvError('');
        }

        return valid;
    };

    const handleSubmit = () => {
        if (validateInputs()) {
            setPaySuccess(true)
        }
    };

    return (
        <>
            <View style={{ flexDirection: "row", marginBottom: 20, gap: 10, alignItems: "center" }}>
                <Svg onPress={() => setScreen("checkout")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M9.57043 18.8201C9.38043 18.8201 9.19043 18.7501 9.04043 18.6001L2.97043 12.5301C2.68043 12.2401 2.68043 11.7601 2.97043 11.4701L9.04043 5.40012C9.33043 5.11012 9.81043 5.11012 10.1004 5.40012C10.3904 5.69012 10.3904 6.17012 10.1004 6.46012L4.56043 12.0001L10.1004 17.5401C10.3904 17.8301 10.3904 18.3101 10.1004 18.6001C9.96043 18.7501 9.76043 18.8201 9.57043 18.8201Z" fill="#2A2A2A" />
                    <Path d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z" fill="#2A2A2A" />
                </Svg>

                <Text style={{ fontSize: 20, color: "#2A2A2A" }}>Payment</Text>
            </View>
            {paySuccess ?
                <View style={{
                    justifyContent: "center",
                    position: "relative",
                    minHeight: 600,
                    width: "100%",
                    alignItems: "center",
                }}>
                    <Image source={require("../assets/confetti.png")} style={{ position: "absolute", borderRadius: 20, width: "100%", height: "100%", }} />
                    <Svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Circle cx="46" cy="46" r="46" fill="#FF7F7D" />
                        <Path d="M25.8542 50.7629L35.6009 59.5287C35.9993 59.887 36.6094 59.8676 36.9842 59.4846L64.2842 31.5938" stroke="white" strokeWidth="8" stroke-linecap="round" />
                    </Svg>

                    <Text style={{  fontFamily: "Montserrat", fontSize: 18, fontWeight: "700" }}>Payment Successful</Text>
                    <Text>Thanks for your purchase</Text>
                </View>
                : <><View style={style.imageContainer}>
                    <Image source={require("../assets/visaCard.png")} style={{ position: "absolute", borderRadius: 20, width: "100%", }} resizeMode="contain"/>
                    <Text style={{ color: "#FAFAFA", fontFamily: "Montserrat", fontSize: 18, position: "absolute", bottom: "35%", left: "10%", fontWeight: "600", color: "#FAFAFA" }}>{cardNumber}</Text>
                    <Text style={{ color: "#FAFAFA", fontFamily: "Montserrat", fontSize: 11, position: "absolute", bottom: "15%", left: "50%", fontWeight: "700", color: "#FAFAFA" }}>{expiryDate}</Text>
                </View>

                    <View style={{ marginTop: 20, flexDirection: "column" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>Card Number</Text>
                        <TextInput
                            style={[style.input, cardNumberError ? style.errorInput : null]}
                            value={cardNumber}
                            onChangeText={setCardNumber}
                            placeholder="0000 0000 0000 0000"
                            keyboardType="numeric"
                        />
                        {cardNumberError ? <Text style={style.errorText}>{cardNumberError}</Text> : null}
                    </View>
                    <View style={{ marginTop: 20, marginBottom: 40, flexDirection: "row", justifyContent: "space-between" }}>

                        <View style={{ width: "48%", flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, marginVertical: 10 }}>Expiry Date</Text>
                            <TextInput
                                style={[style.input, expiryDateError ? style.errorInput : null]}
                                value={expiryDate}
                                onChangeText={setExpiryDate}
                                placeholder="MM/YY"
                                keyboardType="numeric"
                            />
                            {expiryDateError ? <Text style={style.errorText}>{expiryDateError}</Text> : null}
                        </View>
                        <View style={{ width: "48%", flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, marginVertical: 10 }}>CVV</Text>
                            <TextInput
                                style={[style.input, cvvError ? style.errorInput : null]}
                                value={cvv}
                                onChangeText={setCvv}
                                placeholder="123"
                                keyboardType="numeric"
                                secureTextEntry={true}
                            />
                            {cvvError ? <Text style={style.errorText}>{cvvError}</Text> : null}
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: "#FF7F7D", width: "80%", marginHorizontal: "auto", padding: 10, borderRadius: 12 }}>
                            <Text style={{ fontSize: 16, textAlign: "center", color: "#2A2A2A", }}>Make Payment</Text>
                        </TouchableOpacity>
                    </View></>}
        </>
    );
}

const style = StyleSheet.create({
    imageContainer: {
        position: "relative",
        height: 220,
        width: "100%",
        alignItems: "center",
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#2A2A2A66',
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 10,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    }
});

export default Payment;

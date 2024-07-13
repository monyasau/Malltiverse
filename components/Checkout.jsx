import { StyleSheet, TextInput, TouchableOpacity, View, Alert } from "react-native";
import Text from "./CustomText";
import RadioButton from './RadioButton';
import { useState } from "react";

function Checkout({ setScreen }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [address, setAddress] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phone1Error, setPhone1Error] = useState('');
  const [phone2Error, setPhone2Error] = useState('');

  const validateInputs = () => {
    let valid = true;

    if (!selectedOption) {
      Alert.alert('Validation Error', 'Please select a pickup location.');
      valid = false;
    }

    if (!address) {
      setAddressError('Delivery address is required');
      valid = false;
    } else {
      setAddressError('');
    }

    if (!phone1) {
      setPhone1Error('Phone number 1 is required');
      valid = false;
    } else {
      setPhone1Error('');
    }

    if (!phone2) {
      setPhone2Error('Phone number 2 is required');
      valid = false;
    } else {
      setPhone2Error('');
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      setScreen("payment");
    }
  };

  return (
    <View>
      <View style={style.topBar}>
        <Text style={{ fontSize: 20, color: "#2A2A2A" }}>
          Check Out
        </Text>
        <Text style={{ fontSize: 16 }}>3 Items</Text>
      </View>
      <View style={style.main}>
        <Text>Select how to receive your package(s)</Text>
        <View style={{ marginTop: 20, flexDirection: "column" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>Pickup</Text>
          <RadioButton options={[{ label: "Old Secretariat Complex, Area 1, Garki Abaji Abji", value: "location1" }]} selectedValue={selectedOption} onSelect={setSelectedOption} />
          <RadioButton options={[{ label: "Sokoto Street, Area 1, Garki Area 1 AMAC", value: "location2" }]} selectedValue={selectedOption} onSelect={setSelectedOption} />
        </View>
        <View style={{ marginTop: 20, flexDirection: "column" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>Delivery</Text>
          <TextInput
            style={[style.input, addressError ? style.errorInput : null]}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your address"
            keyboardType="default"
          />
          {addressError ? <Text style={style.errorText}>{addressError}</Text> : null}
        </View>
        <View style={{ marginTop: 20, marginBottom: 40, flexDirection: "column" }}>
          <Text style={{ fontSize: 20, fontWeight: "700", marginVertical: 10 }}>Contact</Text>
          <TextInput
            style={[style.input, phone1Error ? style.errorInput : null]}
            value={phone1}
            onChangeText={setPhone1}
            placeholder="Phone nos 1"
            keyboardType="phone-pad"
          />
          {phone1Error ? <Text style={style.errorText}>{phone1Error}</Text> : null}
          <TextInput
            style={[style.input, phone2Error ? style.errorInput : null]}
            value={phone2}
            onChangeText={setPhone2}
            placeholder="Phone nos 2"
            keyboardType="phone-pad"
          />
          {phone2Error ? <Text style={style.errorText}>{phone2Error}</Text> : null}
        </View>
        <View>
          <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: "#FF7F7D", width: "80%", marginHorizontal: "auto", padding: 10, borderRadius: 12 }}>
            <Text style={{ fontSize: 16, textAlign: "center", color: "#2A2A2A", }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  topBar: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    paddingBottom:"10%"
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
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
  },
});

export default Checkout;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopNav from './components/TopNav';

export default function App() {
  return (
    <View style={styles.container}>
      <TopNav/>
      <Text>skskk</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    marginHorizontal:"auto",
    width: '90%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

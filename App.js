import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import TopNav from './components/TopNav';
import MainView from './components/MainView';
import ProductGroup from './components/ProductGroup';

const products = [
  {
  category:"Tech Gadgets",
  items:[
    {
      name:"Joystick Game Controller",
      price:"N 11,250",
      rating:5,
      description:"Wired UCOM USB Pad...."
    },
    {
      name:"Apple IPhone 14 Pro",
      price:"N 1,450,000",
      rating:5,
      description:"6GB RAM + 128GB ROM"
    },
    {
      name:"Touch Screen Smart Watch",
      price:"N 11,250",
      rating:5,
      description:"For Andriod & IOS"
    },
    {
      name:"Itel Bluetooth Earphones",
      price:"N 11,250",
      rating:5,
      description:"BUDS ACE Wireless Earp.."
    },
    {
      name:"HP ENVY 15 X360",
      price:"N 11,250",
      rating:5,
      description:"INTEL Core i7 16GB RAM 512..."
    },
    {
      name:"Oriamo 2000mAH PowerBank",
      price:"N 11,250",
      rating:4,
      description:"Wired UCOM USB Pad for PC...."
    },
  ]
}, 
 {
  category:"Men Fashion",
  items:[
    {
      name:"Men’s Belt Leather",
      price:"N 11,250",
      rating:4,
      description:"Buckle Brown Timeless Belt"
    },
    {
      name:"Quality Plain Face Cap",
      price:"N 1,450,000",
      rating:5,
      description:"Plain Black Face CaP"
    },
    {
      name:"Men’s Formal Lace Up Shoes",
      price:"N 11,250",
      rating:4,
      description:"Italian Brogues Leather Sh.."
    },
    {
      name:"Men’s Short Sleeve ",
      price:"N 11,250",
      rating:5,
      description:"Casual Shirt - Black & Brown"
    },
    {
      name:"Men’s Three Piece Tuxedo",
      price:"N 11,250",
      rating:4,
      description:"Elegant Wedding Suit - Te... "
    },
    {
      name:"DesubClassic Quality Agbada",
      price:"N 11,250",
      rating:4,
      description:"Black Agbada with a Black ....."
    },
  ]
},
 {
  category:"Women Fashion",
  items:[
    {
      name:"Ladies Leather Chic Bag",
      price:"N 11,250",
      rating:4,
      description:"Office Trendy Handbag ..."
    },
    {
      name:"Summer Tie Neck Long Dress",
      price:"N 1,450,000",
      rating:5,
      description:"Purple free Floral Dress"
    },
    {
      name:"Ladies Crystal Bracelet",
      price:"N 11,250",
      rating:4,
      description:"Silver Diamond Flower Brace...."
    },
    {
      name:"Scarlet Darkness Dress ",
      price:"N 11,250",
      rating:4,
      description:"Summer Square Neck Sleeve.."
    },
    {
      name:"Brown Crop Top Sweat Shirt",
      price:"N 11,250",
      rating:4,
      description:"Denami Women Diamond ....."
    },
    {
      name:"Corporate High Heel",
      price:"N 11,250",
      rating:5,
      description:"Leather cover shoe - Black"
    },
  ]
},
]
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <TopNav/>
      <MainView/>
      {products.map((product,index)=>
          (<ProductGroup category={product.category} products={product.items}/>)
      )}
      <StatusBar style="auto" />
    </ScrollView>
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

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
      description:"Wired UCOM USB Pad....",
      image: require("./assets/productImages/gamepad.png")
    },
    {
      name:"Apple IPhone 14 Pro",
      price:"N 1,450,000",
      rating:5,
      description:"6GB RAM + 128GB ROM",
      image: require("./assets/productImages/iphone.png")
    },
    {
      name:"Touch Screen Smart Watch",
      price:"N 11,250",
      rating:5,
      description:"For Andriod & IOS",
      image: require("./assets/productImages/smartWatch.png")
    },
    {
      name:"Itel Bluetooth Earphones",
      price:"N 11,250",
      rating:5,
      description:"BUDS ACE Wireless Earp..",
      image: require("./assets/productImages/earpod.png")
    },
    {
      name:"HP ENVY 15 X360",
      price:"N 11,250",
      rating:5,
      description:"INTEL Core i7 16GB RAM 512...",
      image: require("./assets/productImages/laptop.png")
    },
    {
      name:"Oriamo 2000mAH PowerBank",
      price:"N 11,250",
      rating:4,
      description:"Wired UCOM USB Pad for PC....",
      image: require("./assets/productImages/powerBank.png")
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
      description:"Buckle Brown Timeless Belt",
      image: require("./assets/productImages/belt.png")
    },
    {
      name:"Quality Plain Face Cap",
      price:"N 1,450,000",
      rating:5,
      description:"Plain Black Face CaP",
      image: require("./assets/productImages/cap.png")
    },
    {
      name:"Men’s Formal Lace Up Shoes",
      price:"N 11,250",
      rating:4,
      description:"Italian Brogues Leather Sh..",
      image: require("./assets/productImages/shoe.png")
    },
    {
      name:"Men’s Short Sleeve ",
      price:"N 11,250",
      rating:5,
      description:"Casual Shirt - Black & Brown",
      image: require("./assets/productImages/shortSleeve.png")
    },
    {
      name:"Men’s Three Piece Tuxedo",
      price:"N 11,250",
      rating:4,
      description:"Elegant Wedding Suit - Te... ",
      image: require("./assets/productImages/greenSuit.png")
    },
    {
      name:"DesubClassic Quality Agbada",
      price:"N 11,250",
      rating:4,
      description:"Black Agbada with a Black .....",
      image: require("./assets/productImages/Agbada.png")
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
      description:"Office Trendy Handbag ...",
      image: require("./assets/productImages/handBag.png")
    },
    {
      name:"Summer Tie Neck Long Dress",
      price:"N 1,450,000",
      rating:5,
      description:"Purple free Floral Dress",
      image: require("./assets/productImages/purpleGown.png")
    },
    {
      name:"Ladies Crystal Bracelet",
      price:"N 11,250",
      rating:4,
      description:"Silver Diamond Flower Brace....",
      image: require("./assets/productImages/bracelete.png")
    },
    {
      name:"Scarlet Darkness Dress ",
      price:"N 11,250",
      rating:4,
      description:"Summer Square Neck Sleeve..",
      image: require("./assets/productImages/greenGown.png")
    },
    {
      name:"Brown Crop Top Sweat Shirt",
      price:"N 11,250",
      rating:4,
      description:"Denami Women Diamond .....",
      image: require("./assets/productImages/cropTop.png")
    },
    {
      name:"Corporate High Heel",
      price:"N 11,250",
      rating:5,
      description:"Leather cover shoe - Black",
      image: require("./assets/productImages/highHeels.png")
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

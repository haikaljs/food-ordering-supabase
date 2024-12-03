import { Platform, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { CartContext } from "../providers/CartProvider";

const CartScreen = () => {
 
const {items} = useContext(CartContext)

  return (
    <View>
      <Text>Cart items length: {items.length}</Text>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});

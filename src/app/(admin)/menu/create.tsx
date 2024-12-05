import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CreateProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreateProductScreen</Text>
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
});

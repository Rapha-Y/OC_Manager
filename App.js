import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from "./screens/Login.js";

export default function App() {
  return(
    <View style={styles.page}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  }
}); 
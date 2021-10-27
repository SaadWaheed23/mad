import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const App = () => {
  return(
    <View style = {styles.container}>
      <View style={styles.board} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    marginTop: 20
  },
  board: {
    borderWidth: 3,
    height: 312,
    width: 312,
  },
});

export default App;
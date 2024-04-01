import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My To Do List App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;

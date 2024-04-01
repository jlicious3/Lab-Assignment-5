import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
    <Text style={styles.footer}>Copyright 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    fontSize: 7,
    backgroundColor: '#f2f2f2',
    padding: 10,
    alignItems: 'center',
  },
});

export default Footer;

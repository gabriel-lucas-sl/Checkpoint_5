import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


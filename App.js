import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {store} from './src/Utils/store';
import {Provider} from 'react-redux';
import Home from './src/Screens/Home';
export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Provider store={store}>
        <Home />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({});

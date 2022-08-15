/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

export default function GoogleMaps() {
  return (
    <View style={{padding: 10}}>
      <Text
        style={{fontSize: 24, color: 'blue'}}
        accessibilityLabel="GoogleMapsScreenText">
        Google Maps screen
      </Text>
    </View>
  );
}

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
  },
});

export default function Home({navigation}) {
  const menus = [
    {title: 'Shopping Cart', key: 'ShoppingCart'},
    {title: 'Google Maps', key: 'GoogleMaps'},
  ];

  return (
    <View style={{padding: 10}}>
      <Text
        style={{fontSize: 24, color: 'blue'}}
        accessibilityLabel="HomeScreenText">
        Home screen
      </Text>

      <View>
        <FlatList
          data={menus}
          renderItem={({item}) => (
            <TouchableOpacity
              accessibilityLabel={item.key}
              onPress={() => navigation.navigate(item.key)}
              style={styles.button}>
              <Text style={{color: 'white'}}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

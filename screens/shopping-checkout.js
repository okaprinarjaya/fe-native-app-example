/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, FlatList} from 'react-native';

import AppContext from '../app-context';

export default function ShoppingCheckout() {
  const cart = useContext(AppContext);

  return (
    <View style={{padding: 10}}>
      <Text
        style={{fontSize: 24, color: 'blue'}}
        accessibilityLabel="ShoppingCheckoutScreenText">
        Shopping Checkout screen
      </Text>

      <FlatList
        accessibilityLabel="CartDetailsAsList"
        data={cart.cart.cart.items}
        renderItem={({item}) => (
          <View
            style={{
              marginBottom: 5,
              borderBottomWidth: 2,
              borderBottomColor: 'red',
            }}>
            <Text accessibilityLabel={`ProductItem-${item.id}-Name`}>
              Product item: {item.name}
            </Text>
            <Text accessibilityLabel={`ProductItem-${item.id}-Amount`}>
              Amount: {item.amount}
            </Text>
          </View>
        )}
        style={{marginTop: 15}}
      />
    </View>
  );
}

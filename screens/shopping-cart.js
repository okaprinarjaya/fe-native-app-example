/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

import AppContext from '../app-context';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
  },
});

function Product({item, cart, handleCart}) {
  const handle = () => {
    let itemsNew = null;
    const isItemAlreadyAdded = cart.items.find((itm) => itm.id === item.id);

    if (isItemAlreadyAdded) {
      itemsNew = cart.items.map((itm) => {
        if (itm.id === item.id) {
          return {
            ...itm,
            amount: itm.amount + 1,
          };
        }
        return itm;
      });
    } else {
      const itemNew = {...item, amount: 1};
      itemsNew = [...cart.items, itemNew];
    }

    const cartNew = {
      cart: {
        total: itemsNew.reduce(
          (accumulator, itm) => accumulator + itm.amount,
          0,
        ),
        items: itemsNew,
      },
    };

    handleCart(cartNew);
  };

  return (
    <View style={{marginBottom: 10}}>
      <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
      <Text>Price: Rp. {item.price}</Text>
      <TouchableOpacity
        accessibilityLabel={`Product${item.id}`}
        onPress={() => handle()}
        style={styles.button}>
        <Text style={{color: 'white'}}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function ShoppingCart({navigation}) {
  const cart = useContext(AppContext);
  const products = [
    {name: 'Pampers Charm XL', price: 10000, amount: 0, id: '1'},
    {name: 'V-Soy Soy Milk Cocoa', price: 25000, amount: 0, id: '2'},
    {name: 'Rokok Sampoerna Mild 16 Batang', price: 27000, amount: 0, id: '3'},
  ];

  return (
    <View style={{padding: 10}}>
      <Text
        style={{fontSize: 24, color: 'blue'}}
        accessibilityLabel="ShoppingCartScreenText">
        Shopping cart screen
      </Text>

      {cart.cart.cart.items.length > 0 ? (
        <View>
          <TouchableOpacity
            accessibilityLabel="CheckoutButton"
            onPress={() => navigation.navigate('ShoppingCheckout')}
            style={{...styles.button, backgroundColor: 'green'}}>
            <Text style={{color: 'black'}}>Checkout &#10140;</Text>
          </TouchableOpacity>
        </View>
      ) : null}

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

      <FlatList
        accessibilityLabel="ProductList"
        data={products}
        renderItem={({item}) => (
          <Product
            item={item}
            cart={cart.cart.cart}
            handleCart={cart.handleCart}
          />
        )}
        style={{marginTop: 25}}
      />
    </View>
  );
}

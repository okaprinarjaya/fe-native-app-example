import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

import AppContext from './app-context';
import Home from './screens/home';
import ShoppingCart from './screens/shopping-cart';
import ShoppingCheckout from './screens/shopping-checkout';
import GoogleMaps from './screens/google-maps';

const Stack = createStackNavigator();

function App() {
  const [cart, setCart] = useState({
    cart: {
      total: 0,
      items: [],
    },
  });

  return (
    <AppContext.Provider value={{cart, handleCart: setCart}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="ShoppingCart"
            component={ShoppingCart}
            options={{
              title: 'Shopping Cart',
              headerRight: () => (
                <View style={{paddingRight: 10}}>
                  <Text accessibilityLabel="CartItemsAmountText">
                    Cart: {cart.cart.total}
                  </Text>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="ShoppingCheckout"
            component={ShoppingCheckout}
            options={{title: 'Shopping Checkout'}}
          />
          <Stack.Screen
            name="GoogleMaps"
            component={GoogleMaps}
            options={{title: 'Google Maps'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;

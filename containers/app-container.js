/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../screens/home';
import { Products } from '../services/product.service';

type Props = {};

const state = new Products();
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Home products={state} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fefefe',
  },
  itemsList: { flex: 1 },
});

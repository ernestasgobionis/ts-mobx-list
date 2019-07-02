import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { observer } from 'mobx-react';
import ProductsList from '../components/products-list';

const COLUMN_COUNT = 4;

@observer
class Home extends Component {
  static propTypes = {
    products: PropTypes.object,
  };
  static defaultProps = {};

  componentWillMount() {
    this.props.products.fetchProducts(10);
  }

  render() {
    const { products } = this.props;
    const { items, loading } = products;
    return (
      <View style={styles.container}>
        <ProductsList items={items} loading={loading} columnCount={COLUMN_COUNT} />
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fefefe',
  },
  itemsList: { flex: 1 },
});

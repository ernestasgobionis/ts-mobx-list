import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const ITEM_MARGIN = 16;

@observer
class ProductsList extends Component {
  static propTypes = {};
  static defaultProps = {};

  renderProduct = ({ item }) => {
    const size = 1 / this.props.columnCount;
    const itemWidth = (DEVICE_WIDTH * size) - ITEM_MARGIN * 2;
    return (
      <View style={{ width: itemWidth, margin: ITEM_MARGIN }}>
        <Image
          style={{ width: itemWidth, height: itemWidth }}
          source={{ uri: item.image }}
          resizeMode={'cover'}
        />
        <View style={styles.productTextContainer}>
          <Text style={styles.boldText}>{item.name}</Text>
          <View>
            <Text style={{ ...styles.boldText, ...styles.priceText }}>
              {item.price} DKK
            </Text>
            <Text style={{ ...styles.boldText, ...styles.secondaryPriceText }}>
              RRP {item.price} DKK
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { items, columnCount } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.itemsList}
          renderItem={this.renderProduct}
          data={items.toJS()}
          keyExtractor={item => item.name}
          numColumns={columnCount}
          ItemSeparatorComponent={() => (
            <View style={styles.rowSeparatorContainer}>
              <Text style={styles.rowSeparatorText}>
                Category
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <View>
              <ActivityIndicator size={'small'} />
            </View>
          }
        />
      </View>
    );
  }
}

export default ProductsList;

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemsList: { flex: 1 },
  productTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  rowSeparatorContainer: {
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
  },
  rowSeparatorText: {
    paddingTop: 10,
    paddingLeft: 14,
    fontSize: 16,
    fontWeight: '500',
  },
  priceText: {
    textAlign: 'right',
  },
  secondaryPriceText: {
    color: 'rgba(0,0,0,0.35)',
    textAlign: 'right',
  },
  boldText: {
    fontWeight: '600',
  },
});

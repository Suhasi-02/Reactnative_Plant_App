import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import plantData from '../../conts/plantinfo';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Succulent Plant',
      price: '39.99',
      img: plantData[0].img,
      quantity: 1, // Add quantity to track the number of items
    },
    {
      id: 2,
      name: 'Potted Plant',
      price: '25.99',
      img: plantData[3].img,
      quantity: 2, // Add quantity to track the number of items
    },
    {
      id: 3,
      name: 'Dragon Plant',
      price: '50.99',
      img: plantData[5].img,
      quantity: 1, // Add quantity to track the number of items
    },
  ]);

  const removeCartItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const totalCost = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0); // Calculate total based on quantity

  const CartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.img} style={styles.cartItemImage} />
      <View style={styles.cartItemInfo}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
        <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
      </View>
      <TouchableOpacity onPress={() => removeCartItem(item.id)}>
        <Icon name="trash" size={24} color={COLORS.red} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 30,
        }}>
        <View>
          <Text style={styles.title}>Added to Cart</Text>
        </View>
        <Icon
          name="reply"
          size={27}
          onPress={() => navigation.goBack()}
          style={{ marginTop: 50 }}
        />
      </View>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <View style={styles.dashedLine}>
        <Text style={styles.dashedText}>----------</Text>
      </View>

      <View style={styles.totalContainer}>
        <View style={styles.total}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total:</Text>
        </View>
        <View style={styles.amount}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            ${totalCost.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderColor: COLORS.light,
    backgroundColor: COLORS.light,
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 50,
  },
  cartItemImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  cartItemInfo: {
    flexDirection: 'column',
    flex: 1,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  cartItemQuantity: {
    fontSize: 14,
  },
  dashedLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    height: 4,
    marginVertical: 10,
  },
  dashedText: {
    color: COLORS.white,
    fontSize: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    flex: 1,
    marginBottom: 40,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    flex: 1,
    marginBottom: 40,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default CartScreen;

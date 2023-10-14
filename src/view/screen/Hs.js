import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import plantsData from '../../conts/plantinfo';

const width = Dimensions.get('screen').width / 2 - 30;

const HomeScreen = ({ navigation }) => {
  const [plants, setPlants] = useState(plantsData);

  const [categoryIndex, setCategoryIndex] = useState(0);

  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  const onLikePress = (id) => {
    const updatedPlants = plants.map((plant) => {
      if (plant.id === id) {
        return { ...plant, like: !plant.like };
      }
      return plant;
    });

    setPlants(updatedPlants);
  };

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryText,
                categoryIndex === index && styles.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', plant)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => onLikePress(plant.id)}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: plant.like
                    ? 'rgba(245, 42, 42, 0.2)'
                    : 'rgba(0, 0, 0, 0.2) ',
                }}>
                <Icon
                  name="heart"
                  size={18}
                  color={plant.like ? COLORS.red : COLORS.dark}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant.img}
              style={{ flex: 1, resizeMode: 'contain' }}
            />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              ${plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 15, color: COLORS.white, fontWeight: 'bold' }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
          <Text
            style={{ fontSize: 38, color: COLORS.green, fontWeight: 'bold' }}>
            Plant Store
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
          <Icon name="heart" size={28} style={{ marginLeft: 50, marginTop: 22 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={30} style={{ marginTop: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={23} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: { fontSize: 12, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

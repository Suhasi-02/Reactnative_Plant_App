import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import plantsData from '../../conts/plantinfo';
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoritesScreen = ({ navigation }) => {
  // Filter the plants where 'like' is true
  const favoritePlants = plantsData.filter((plant) => plant.like);

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
                  backgroundColor: 'rgba(245, 42, 42, 0.2)',
                }}>
                <Icon
                  name="heart"
                  size={18}
                  color={COLORS.red}
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
    <View style={styles.container}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,paddingBottom:30}}>
    <View><Text style={styles.title}>Your Favorites</Text></View>
      <Icon name="reply" size={27} onPress={() => navigation.goBack()} style={{marginTop:50}}/>
     </View> 
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={favoritePlants}
        renderItem={({ item }) => {
          return <Card plant={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 50,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width: 170,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  
});

export default FavoritesScreen;

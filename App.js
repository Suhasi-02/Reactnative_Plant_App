import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import HomScreen from './src/view/screen/Hs';
import DetScreen from './src/view/screen/Ds';
import FavoritesScreen from './src/view/screen/Fav';
import CartScreen from './src/view/screen/cart';
import plantsData from './src/conts/plantinfo';
import {createStackNavigator} from '@react-navigation/stack';
const Stack= createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import COLORS from './src/conts/colors';
//import { PagerView } from 'react-native-pager-view';



export default function App() {

 
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Home" component={HomScreen}  />
      <Stack.Screen name="Details" component={DetScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}





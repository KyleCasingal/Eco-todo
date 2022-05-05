/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { AddToDoScreen, TodoScreen } from '../screens/Home';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeNavigator from './HomeNavigator';
import { RootStackParamList } from '../types';
import TodoNavigator from './TodoNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditToDoScreen from '../screens/Home/EditToDoScreen';
import CustomDrawer from '../components/customDrawer';
import { Ionicons } from '@expo/vector-icons';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Drawer = createDrawerNavigator<RootStackParamList>();



function RootNavigator() {
  const colorScheme = useColorScheme();

  return (

    

    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#eff2ed',   
        drawerStyle: {
          backgroundColor: '#84A98C'
        }

      }}
    >
      <Drawer.Screen 
      name="Home" 
      component={HomeNavigator} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name='home' size={25} color={color}/>
        )
      }}
      />
      <Drawer.Screen 
      name="Todo" 
      component={TodoNavigator} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name='file-tray' size={25} color={color}/>
        )
      }}
      />
    </Drawer.Navigator>
  )
};




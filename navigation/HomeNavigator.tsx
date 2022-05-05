import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabOneScreen from '../screens/TabOneScreen';
import { HomeParamList, RootStackParamList } from '../types';
import * as React from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigation from '.';
import { Ionicons } from '@expo/vector-icons';
import EditToDoScreen from '../screens/Home/EditToDoScreen';
import SplashScreen from '../components/SplashScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
        initialRouteName='Landing'
        screenOptions={({ navigation }) => ({
            title: "Home",
            headerStyle: {
                backgroundColor: '#52796F',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTitleAlign: "center",
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 5
                    }}
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                >
                    <Ionicons
                        name={"menu"}
                        size={24}
                        color={"white"}
                    />
                </TouchableOpacity>
            )

        })}
    >
      <Stack.Screen name="Landing" component={TabOneScreen} /> 
    </Stack.Navigator>
  );
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabOneScreen from '../screens/TabOneScreen';
import { HomeParamList, RootStackParamList, TodoParamList } from '../types';
import * as React from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigation from '.';
import { Ionicons } from '@expo/vector-icons';
import { AddToDoScreen, TodoScreen } from '../screens/Home';
import EditToDoScreen from '../screens/Home/EditToDoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function TodoNavigator() {
  return (
    <Stack.Navigator
        initialRouteName='TodoList'
        screenOptions={({ navigation }) => ({
            title: "Todo List",
            headerStyle: {
                backgroundColor: '#52796F'
            },
            headerTitleStyle: {
                color: 'white',
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
      <Stack.Screen name="TodoList" component={TodoScreen} />
      <Stack.Screen 
      name="AddTodo" 
      component={AddToDoScreen}
      options={{
          title: "Add Todo"
      }} 
      />    
      <Stack.Screen 
      name="EditTodo" 
      component={EditToDoScreen}
      options={{
          title: "Edit Todo"
      }}
      />
    </Stack.Navigator>
  );
}
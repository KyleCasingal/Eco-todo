import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { RouteProp, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { useCallback, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FAB } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { getData, storeData } from "../../database/StoreData";
import { Todo } from "../../models/Todo";
import { RootStackParamList } from "../../types";
import { Overlay } from 'react-native-elements';
import { ListItem } from 'react-native-elements'

export default function TodoScreen() {
    

    const [visible, setVisible] = useState(false);
    
   
    const [todos, setTodos] = useState<Array<Todo> | null>(null);
    const retrieveData =async () => {
        const todoList = await getData('todoList');
        if (todoList) {
            const json = JSON.parse(todoList);
            setTodos(json)
        }
        // await removeData('todoList');
    }


    useFocusEffect(
        useCallback(() => {
            retrieveData();
        }, [])
    );

    const navigation = useNavigation();


    return (
        <View style={styles.container}>

            
                <ScrollView 
                    alwaysBounceVertical = {true}
                    overScrollMode = {'always'}
                >
                <View style={styles.container}>
                    {todos && todos.map((todo: Todo, index: number) => (
                            
                            <TouchableOpacity 
                            key={index.toString()}
                            style={styles.todoItem}
                                onPress = {() => {
                                    navigation.navigate("EditTodo", {todo: todo, index: index})
                            }}
                            >
                                <View style={styles.todoFlex}>
                                    <View style={{height: 50}}>
                                    <Text style={styles.todoTitle}>
                                        {todo.title}
                                    </Text>
                                    <Text style={styles.todoDesc}>
                                        {todo.description}
                                    </Text>
                                    </View>
                                    <View style={styles.chevronAlign}>
                                        <Ionicons name="chevron-forward" size={24} color="gray" />
                                    </View>
                                    
                                </View>
                                
                            </TouchableOpacity>

                    ))}
                </View>
                </ScrollView>          
            <FAB
                icon={<Ionicons name="add" size={24} color={'white'}  />}
                placement="right"
                color="#52796F"
                onPress={() => navigation.navigate("AddTodo")}
            />           
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAD2C5'
    },
    todoTitle: {
        marginLeft: 20,
        fontSize: 20,
    },
    todoDesc: {
        marginLeft: 20,
        fontSize: 15,
        color: 'gray'
    },
    todoItem: {
        flex: 1,
        height: 75,
        justifyContent: 'center',
        borderColor: 'darkgray',
        borderStyle: 'solid',
        borderWidth: 1,
        borderTopColor: '#CAD2C5'

    },
    overlayText: {
        fontSize: 25,
        textAlign: 'center'
    },
    todoFlex: {
        flexDirection: 'row', 
    },
    chevronAlign: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-end',
        marginRight: 10
    }
})
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, FAB } from "react-native-elements";
import { Formik } from "formik";
import * as yup from 'yup';
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addTodo } from "../../redux/reducers/todoReducers";
import { Todo } from "../../models/Todo";
import { color } from "react-native-reanimated";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData, removeData, storeData } from "../../database/StoreData";
import { useState } from "react";

export default function AddToDoScreen() {
    const navigation = useNavigation();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    

    const todoSchema = yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required")
    });

    const submitTodo = async () => {
        const data = {
            title: title,
            description: description,
        }

        const todoList = await getData('todoList');
        if (todoList) {
            const json = JSON.parse(todoList);
            const mergeTodoList = [data, ...json];
            storeData('todoList', JSON.stringify(mergeTodoList));
        }else {
            storeData('todoList', JSON.stringify([data]));
        }
        navigation.navigate("TodoList")
        
    }


    return (
        <View style={styles.container}>
            
                    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
                        <View style={styles.container}>
                            <View style={{ flex: 0, marginBottom: 20 }}>
                                <Text style={styles.textStyle}>Title</Text>
                                <TextInput
                                    value={title}
                                    textAlign="left"
                                    onChangeText={title => setTitle(title)}
                                    textAlignVertical="top"
                                    style={[styles.textInputStyle, { minHeight: 50 }]}
                                    placeholder="Title of your task"
                                    multiline={true}
                                />
                            </View>
                            <View style={{ flex: 0 }}>
                                <Text style={styles.textStyle}>Description</Text>
                                <TextInput
                                    value={description}
                                    onChangeText={description =>setDescription(description)}
                                    textAlign="left"
                                    textAlignVertical="top"
                                    style={[styles.textInputStyle, { minHeight: 200 }]}
                                    placeholder="Task Details"
                                    multiline={true}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0 }}>
                            <Button
                                title={"SAVE"}
                                
                                buttonStyle={{ 
                                    borderRadius: 5,
                                    backgroundColor: '#52796F'
                                }}
                                onPress={() => submitTodo()}
                            />
                        </View>
                    </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAD2C5'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        
    },
    textInputStyle: {
        borderWidth: 2,
        fontSize: 17,
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        borderColor: 'lightgray',
        backgroundColor: 'white'
    }
})
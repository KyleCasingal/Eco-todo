/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Todo } from './models/Todo';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Home: undefined;
  Todo: undefined;
  Profile: undefined;
  AddTodo: undefined;
  Landing: undefined;
  TodoList: undefined;
  TodoDetail: undefined;
  EditTodo: {index: number; todo: Todo; };
  Settings: undefined;
};

export type HomeParamList = {
  
}
export type TodoParamList = {
  
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;




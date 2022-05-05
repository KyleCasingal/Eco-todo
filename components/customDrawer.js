import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Overlay } from "react-native-elements";


const customDrawer = (props) => {
    return (
        <View style={{flex: 1}}>
        <DrawerContentScrollView {...props} 
            contentContainerStyle={{backgroundColor:'#52796F'}}>
                <ImageBackground 
                source={require('../assets/images/headerBG.jpg')} 
                style={{padding:20}}>
                    <Image 
                    source={require('../assets/images/userImg.png')} 
                    style={{height: 80, width: 80, borderRadius: 40, marginBottom:10}}
                    />
                    <View style={{flexDirection: "column"}}>
                        <Text 
                        
                        style={{
                            color:'#fff', 
                            fontSize:20, 
                            marginRight: 10}}>
                                John Doe
                                 </Text> 

                        <Text
                        style={{
                            color:'#fff', 
                            fontSize:10, 
                            marginRight: 10}}
                            
                        >@johndoe</Text>
                    </View>
                    
                    </ImageBackground>
                    <View style={{flex: 1, backgroundColor:'#84A98C'}}>
                        <DrawerItemList {...props}/>
                    </View>
            
           
        </DrawerContentScrollView>
        </View>
        
    )
}

export default customDrawer
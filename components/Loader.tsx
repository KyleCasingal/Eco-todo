import * as React from 'react';

import { ActivityIndicator, PixelRatio, StyleSheet, View, Text } from 'react-native';
import { DefaultColor } from '../constants/Colors';
import LottieView from 'lottie-react-native';


export default function Loader() {
    return (
        <View style={styles.fullScreen}>
            <LottieView
                source={require('../assets/json/84581-monstera-leaf.json')}
                autoPlay={true}
                duration={3000}
                loop={true}
                style={{ flex: 1 }}
            />
            <View style={styles.Titletext}>
            <Text>
                ECO todo
            </Text>
        </View>
    
        </View>
     );   
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    container: {
        height: PixelRatio.getPixelSizeForLayoutSize(30),
        width: PixelRatio.getPixelSizeForLayoutSize(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        opacity: 0.8,
        backgroundColor: DefaultColor.main
    },
    Titletext: {
        flex: 1,
        
    }
});
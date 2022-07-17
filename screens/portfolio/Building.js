import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, TouchableWithoutFeedback } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_700Bold,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import Loader from '../components/Loader';
import CircularProgress from "../components/CircularProgress";
import { runTiming } from "react-native-redash"
import { Clock, Easing } from "react-native-reanimated";


const Building = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_700Bold,
        Manrope_800ExtraBold
    });

    function navigateToDesign(){
        navigation.navigate('design')
    }

    const config = {
        duration : 20 * 1000,
        toValue : 1,
        easing : Easing.linear
    }
    const clock = new Clock()

    if(!fontsLoaded) {
        return <Loader />
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.header}>
                        <TouchableWithoutFeedback onPress={navigateToDesign}>
                            <Image
                                style={styles.arrowIcon}
                                source={require('../../assets/icons/arrow-back.png')}
                                resizeMode="contain"
                            />  
                        </TouchableWithoutFeedback>
                        <Text style={styles.title}>
                            Building your Portfolio
                        </Text>
                    </View>
                </View>
                <View style={styles.mid}>
                    <CircularProgress />
                    <Text style={styles.midText}>This will take a moment...</Text>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : "#FFF"
    },
    top : {
        flex: 0.2,
        alignItems : "center"
    },
    header : {
        display : "flex",
        flexDirection : "row",
        top : 70,
        alignItems : "center"
    },
    arrowIcon : {
        width : 20,
        height : 20,
        right : 30
    },
    title : {
        right : 5,
        fontSize : 24,
        fontFamily : "Manrope_700Bold"
    },
    subtitle : {
        top : 80,
        fontSize : 13,
        fontFamily : "Manrope_500Medium",
        textAlign : "center",
        paddingHorizontal : 35
    },
    subtitleLink : {
        color : "#2C0B8F",
        fontFamily : "Manrope_800ExtraBold"
    }, 
    mid : {
        flex: 0.8,
        alignItems : "center",
        top : 40
    },
    midText : {
        top : 40,
        fontFamily : "Manrope_500Medium",
        color : "#485068"
    }
})
export default Building;
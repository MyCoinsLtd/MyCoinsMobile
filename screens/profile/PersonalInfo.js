import React, { useState } from "react";
import { StyleSheet, Text, View , ImageBackground, Image, Pressable, TouchableWithoutFeedback } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import Loader from "../components/Loader";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const PersonalInfo = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold
    });    

    function navigateToProfile(){
        navigation.navigate("profile")
    }

    if (!fontsLoaded) {
        return <Loader />;
      } else {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/background/background.png')} resizeMode="cover" style={styles.backgroundImage}>
                    <TouchableWithoutFeedback onPress={navigateToProfile}>
                        <Image
                            style={styles.arrowIcon}
                            source={require('../../assets/icons/arrow-back-white.png')}
                            resizeMode="contain"
                        />
                    </TouchableWithoutFeedback>
                    <Text style={styles.title}>Personal Information</Text>
                    <View style={styles.card}>
                        <View style={styles.fields}>
                            <TextInput
                                style={styles.input}
                                placeholder="First Name"
                                label="First Name"
                                theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                                label="Last Name"
                                theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Street address"
                                label="Street address"
                                theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="City"
                                label="City"
                                theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="ZIP/Area code"
                                label="ZIP/Area code"
                                theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Citizenship"
                                label="Citizenship"
                                theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                            />
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Update</Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        backgroundColor : "#FFF",
        width : 415,
        height : 850,
        top : 140,
        borderRadius : 30,
        alignItems: "center"
    },
    arrowIcon : {
        position: "absolute",
        top : 90,
        width : 30,
        height : 30,
        left : 10,
        zIndex :99999
    },
    title : {
        fontFamily : "Manrope_700Bold",
        fontSize : 25,
        color : "white",
        position : "absolute",
        top : 85
    },
    fields : {
        flex : 1,
        position : "absolute",
        top : 20
    },
    input: {
        height: 60,
        width : 380,
        margin: 12,
        borderRadius : 23,
        fontSize : 19,
        marginBottom : 0
    },
    button : {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 47,
        width : 300,
        borderRadius: 16,
        elevation: 3,
        backgroundColor: '#2D0C92',
        position : "absolute",
        top : 600
    },
    buttonText: {
        fontSize: 19,
        lineHeight: 25,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily : "Manrope_800ExtraBold"
    },
    
});
export default PersonalInfo;
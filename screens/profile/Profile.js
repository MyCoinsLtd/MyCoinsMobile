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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const Profile = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold
    });    

    function goback(){
        navigation.goBack(null)
    }
    function navigatetoPersonalInfo(){
        navigation.navigate("personal info")
    }

    if (!fontsLoaded) {
        return <Loader />;
      } else {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/background/background.png')} resizeMode="cover" style={styles.backgroundImage}>
                    <Image
                        style={styles.userIcon}
                        source={require('../../assets/mycoins-logo.png')}
                        resizeMode="contain"
                    />
                    <TouchableWithoutFeedback onPress={goback}>
                        <Image
                            style={styles.arrowIcon}
                            source={require('../../assets/icons/arrow-back-white.png')}
                            resizeMode="contain"
                        />
                    </TouchableWithoutFeedback>
                    <View style={styles.card}>
                        <Text style={styles.userName}>Mattie Hardwick</Text>
                        <View style={styles.buttons}>
                            <Pressable style={styles.button} onPress={navigatetoPersonalInfo}>
                                <Text style={styles.buttonText}>Personal information</Text>
                                <MaterialCommunityIcons style={styles.icon} name="arrow-right" size={25} color="#B5BBC9" />
                            </Pressable>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Phone number verification</Text>
                                <MaterialCommunityIcons style={styles.icon} name="arrow-right" size={25} color="#B5BBC9" />
                            </Pressable>
                            <Text style={styles.settings}>Settings</Text>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Default Currency</Text>
                                <MaterialCommunityIcons style={styles.icon} name="arrow-right" size={25} color="#B5BBC9" />
                            </Pressable>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Security</Text>
                                <MaterialCommunityIcons style={styles.icon} name="arrow-right" size={25} color="#B5BBC9" />
                            </Pressable>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Help & Support</Text>
                                <MaterialCommunityIcons style={styles.icon} name="arrow-right" size={25} color="#B5BBC9" />
                            </Pressable>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Legaly</Text>
                                <MaterialCommunityIcons style={styles.icon} name="arrow-right" size={25} color="#B5BBC9" />
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
        top : 120,
        width : 30,
        height : 30,
        left : 10,
        zIndex :99999
    },
    userIcon : {
        alignSelf : "center",
        position : "absolute",
        top : 110,
        width : 100,
        height : 100,
        zIndex : 1,
        borderColor : "#FFF",
        borderWidth : 2,
        borderRadius : 47
    },
    userName : {
        fontFamily : "Manrope_700Bold",
        fontSize : 20,
        top : 50
    },
    buttons : {
        marginTop : 100
    },
    button : {
        backgroundColor : "#EDF1F9",
        width : 370,
        paddingHorizontal : 20,
        paddingVertical : 15,
        marginVertical : 10,
        borderRadius : 47,
        flexDirection : "row",
        left : 0,
        right : 0,
        alignItems :"center"
    },
    buttonText : {
        fontFamily : "Manrope_700Bold",
        fontSize : 20
    },
    icon : {
        alignItems : "flex-end",
        justifyContent : "flex-end",
        marginLeft : "auto"
    },
    settings : {
        fontFamily : "Manrope_700Bold",
        fontSize : 15,
        paddingTop : 30
    }
});
export default Profile;
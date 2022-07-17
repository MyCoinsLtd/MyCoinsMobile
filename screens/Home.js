import React from "react";
import { StyleSheet, Text, View, Image, Pressable, TouchableWithoutFeedback } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_700Bold,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import Loader from './components/Loader';
import { DrawerActions } from '@react-navigation/native';

const Home = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_700Bold,
        Manrope_800ExtraBold
    });

    function navigateToRisk(){
        navigation.navigate('risk')
    }
    function openMenu(){
        navigation.dispatch(DrawerActions.openDrawer());
    }

    if(!fontsLoaded) {
        return <Loader />
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                <View style={styles.header}>
                        <TouchableWithoutFeedback onPress={openMenu}>
                            <Image
                                style={styles.menuIcon}
                                source={require('../assets/icons/menu.png')}
                                resizeMode="contain"
                            />  
                        </TouchableWithoutFeedback>
                        <Text style={styles.title}>
                            Welcome to MyCoins
                        </Text>
                    </View>
                    <Text style={styles.subtitle}>
                        To begin investing, please start your profile setup
                    </Text>
                </View>
                <View style={styles.mid}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/mycoins-logo.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.bottom}>
                    <Pressable style={styles.darkButton} onPress={navigateToRisk}>
                        <Text style={styles.buttonText}>Start Portfolio Setup</Text>
                    </Pressable>
                    <Pressable style={styles.lightButton}>
                        <Text style={styles.buttonText}>Skip</Text>
                    </Pressable>
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
        flex: 1,
        alignItems : "center"
    },
    header : {
        display : "flex",
        flexDirection : "row",
        top : 70,
        alignItems : "center"
    },
    menuIcon : {
        width : 25,
        height : 25,
        left : 300
    },
    title : {
        right : 15,
        fontSize : 24,
        fontFamily : "Manrope_700Bold"
    },
    subtitle : {
        top : 80,
        fontSize : 13,
        fontFamily : "Manrope_500Medium"
    },
    mid : {
        flex: 1,
        justifyContent : "center",
        alignItems : "center"
    },
    logo : {
        width : 220,
        height : 220
    },
    bottom : {
        flex: 1,
        justifyContent : "center",
    },
    darkButton : {
        alignSelf: "center",
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 35,
        elevation: 3,
        backgroundColor: '#2D0C92',
        position : "absolute",
        top : 100,
        width : 320
    },
    lightButton : {
        alignItems: 'center',
        alignSelf: "center",
        paddingVertical: 14,
        borderRadius: 35,
        elevation: 3,
        backgroundColor: '#C0BAD2',
        position : "absolute",
        top : 170,
        width : 320
    },
    buttonText : {
        fontSize: 17,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily : "Manrope_800ExtraBold"
    }
})
export default Home;
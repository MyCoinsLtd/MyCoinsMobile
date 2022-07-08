import React from "react";
import { StyleSheet, Text, View , ImageBackground, Image, Pressable } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import Loader from './components/Loader';


const Welcome = ({navigation}) => {
    
    function navigateToSignIn(){
        navigation.navigate('signIn');
    }
    function navigateToSignUp(){
        navigation.navigate('signUp');
    }

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_800ExtraBold
    });
    if (!fontsLoaded) {
        return <Loader />;
      } else {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background/background.png')} resizeMode="cover" style={styles.backgroundImage}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/mycoins-logo-full.png')}
                        resizeMode="contain"
                    />
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>
                            Speedy, easy and fast
                        </Text>
                        <Text style={styles.cardText}>
                            Mycoins help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits
                        </Text>
                        <Pressable style={styles.cardButton} onPress={navigateToSignUp}>
                            <Text style={styles.cardButtonText}>Create Account</Text>
                        </Pressable>
                        <Text style={styles.cardSignInText}>
                            Already a member? <Text style={styles.cardSignInTextLink} onPress={navigateToSignIn}>Log In</Text>
                        </Text>
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
    logo: {
        flex: 1,
        width: 296,
        height: 296,
        justifyContent: "center",
        bottom: 600,
        position: "absolute"
    },
    card: {
        backgroundColor : "#FFF",
        width : 380,
        height : 600,
        top : 100,
        borderRadius : 16,
        alignItems: "center"
    },
    cardTitle: {
        fontFamily : "Manrope_800ExtraBold",
        fontSize : 30,
        marginTop : 15
    },
    cardText : {
        textAlign: "center",
        fontSize: 16,
        fontFamily : "Manrope_500Medium",
        color : "#8C8C8C",
        lineHeight : 24,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 20,
        letterSpacing : 0.2
    },
    cardButton : {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 47,
        borderRadius: 16,
        elevation: 3,
        backgroundColor: '#2D0C92',
        marginTop : 250
    },
    cardButtonText: {
        fontSize: 19,
        lineHeight: 25,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily : "Manrope_800ExtraBold"
    },
    cardSignInText : {
        fontFamily : "Manrope_500Medium",
        marginTop : 15,
        fontSize : 15
    },
    cardSignInTextLink : {
        fontFamily : "Manrope_800ExtraBold"
    }
});
export default Welcome;
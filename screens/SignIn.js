import React from "react";
import { StyleSheet, Text, View , ImageBackground, Image, Pressable } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';

const SignIn = () => {
    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_800ExtraBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
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
                            Sign in to Mycoins
                        </Text>
                        <Text style={styles.cardText}>
                            Invest, spend and save smarter
                        </Text>
                        <View style={styles.cardSignInButtons}>
                            <View style={styles.buttonContainer}>
                                <Pressable style={styles.cardSignInButton}>
                                    <Image
                                        style={styles.cardSignInButtonLogo}
                                        source={require('../assets/logos/google.png')}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.cardButtonText}>Sign In with Google</Text>
                                </Pressable>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Pressable style={styles.cardSignInButton}>
                                    <Image
                                        style={styles.cardSignInButtonLogo}
                                        source={require('../assets/logos/apple.png')}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.cardButtonText}>Sign In with Apple</Text>
                                </Pressable>
                            </View>
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
    logo: {
        flex: 1,
        width: 296,
        height: 296,
        justifyContent: "center",
        bottom: 650,
        position: "absolute"
    },
    card: {
        backgroundColor : "#FFF",
        width : 415,
        height : 800,
        top : 140,
        borderRadius : 30,
        alignItems: "center"
    },
    cardTitle: {
        fontFamily : "Manrope_800ExtraBold",
        fontSize : 30,
        marginTop : 15
    },
    cardText : {
        textAlign: "center",
        fontSize: 14,
        fontFamily : "Manrope_500Medium",
        color : "#8C8C8C",
        lineHeight : 24,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 10,
        letterSpacing : 0.2
    },
    cardSignInButton : {
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 27,
        borderRadius: 16,
        elevation: 3,
        backgroundColor: 'white',
        borderWidth : 1,
        borderColor : "#D9D9D9",
        marginLeft : 2,
        marginRight: 2,
        flexDirection: 'row',
    },
    cardButtonText: {
        fontSize: 12,
        lineHeight: 25,
        letterSpacing: 0.25,
        color: 'black',
        fontFamily : "Manrope_800ExtraBold"
    },
    cardSignInText : {
        fontFamily : "Manrope_500Medium",
        marginTop : 15,
        fontSize : 15,
        textAlign : "center"
    },
    cardSignInTextLink : {
        fontFamily : "Manrope_800ExtraBold"
    },
    cardSignInButtons : {
        flex: 1,
        flexDirection: 'row',
        marginTop : 40,
        marginLeft : 4,
        marginRight: 4
    },
    buttonContainer : {
        flex : 1
    },
    cardSignInButtonLogo : {
        width : 26,
        height : 26,
        marginRight : 10
    }
});
export default SignIn;
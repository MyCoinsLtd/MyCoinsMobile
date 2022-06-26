import React, { useState } from "react";
import { StyleSheet, Text, View , ImageBackground, Image, Pressable } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';

const SignUp = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_800ExtraBold
    });

    function navigateToSignIn(){
      navigation.navigate('signIn');
    }
    function navigateToEmailSignUp(){
      navigation.navigate('signUpEmail');
    }

    // if (!fontsLoaded) {
    //   return <AppLoading />;
    // } else {
      return (
          <View style={styles.container}>
              <ImageBackground source={require('../../../assets/background/background-1.png')} resizeMode="cover" style={styles.backgroundImage}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/mycoins-logo-full.png')}
                    resizeMode="contain"
                />
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>
                    Let's get started
                  </Text>
                  <Text style={styles.cardText}>
                    Invest, spend and save money
                  </Text>
                  <View style={styles.cardSignInButtons}>
                      <View style={styles.buttonContainer}>
                          <Pressable style={styles.cardSignInButton}>
                              <Image
                                  style={styles.cardSignInButtonLogo}
                                  source={require('../../../assets/logos/google.png')}
                                  resizeMode="contain"
                              />
                              <Text style={styles.cardButtonText}>Sign Up with Google</Text>
                          </Pressable>
                      </View>
                      <View style={styles.buttonContainer}>
                          <Pressable style={styles.cardSignInButton}>
                              <Image
                                  style={styles.cardSignInButtonLogo}
                                  source={require('../../../assets/logos/apple.png')}
                                  resizeMode="contain"
                              />
                              <Text style={styles.cardButtonText}>Sign Up with Apple</Text>
                          </Pressable>
                      </View>
                  </View>
                  <View style={styles.breakLine}>
                    <View style={styles.Line} />
                    <Text style={styles.breakLineText}>Or</Text>
                    <View style={styles.Line} />
                  </View>
                  <Pressable style={styles.loginButton} onPress={navigateToEmailSignUp}>
                    <Text style={styles.loginButtonText}>Sign Up with email</Text>
                  </Pressable>
                  <Text style={styles.cardSignInText}>
                    Already Have an account ? <Text style={styles.cardSignInTextLink} onPress={navigateToSignIn}>Log In</Text>
                  </Text>
                  <View style={styles.footer}>
                    <Text style={styles.privacy}>
                        Privacy Policy
                    </Text>
                    <Text style={styles.copyright}>
                        Copyright 2022
                    </Text>
                  </View>
                </View>
              </ImageBackground>
          </View>
      )
    // }
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
    card : {
      backgroundColor : "#FFF",
      width : 415,
      height : 550,
      top : 190,
      borderRadius : 30,
      alignItems: "center"
    },
    cardTitle : {
      fontFamily : "Manrope_800ExtraBold",
      fontSize : 30,
      marginTop : 30
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
    cardSignInButtons : {
      flex: 1,
      flexDirection: 'row',
      marginTop : 100,
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
    },
    breakLine : {
      flexDirection: 'row',
      marginBottom: 230,
      alignItems : "center"
    },
    Line : {
      borderBottomColor: '#D9D9D9',
      borderBottomWidth : 1,
      width : 180
    },
    breakLineText : {
      paddingLeft : 5,
      paddingRight : 4,
      fontFamily : "Manrope_500Medium",
      fontSize : 16,
      color : "#454545"
    },
    loginButton : {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: "center",
      paddingVertical: 12,
      paddingHorizontal: 100,
      borderRadius: 16,
      elevation: 3,
      backgroundColor: '#2D0C92',
      position : "absolute",
      top : 350
    },
    loginButtonText: {
      fontSize: 19,
      lineHeight: 25,
      letterSpacing: 0.25,
      color: 'white',
      fontFamily : "Manrope_800ExtraBold"
    },
    cardSignInText : {
      fontFamily : "Manrope_500Medium",
      fontSize : 15,
      textAlign : "center",
      position: "absolute",
      top : 420
    },
    cardSignInTextLink : {
      fontFamily : "Manrope_800ExtraBold"
    },
    footer: {
      flexDirection : "row",
      position : "absolute",
      top : 500,
      flex : 1,
      left : 25,
      right : 25
    },
    privacy : {
        fontFamily : "Manrope_600SemiBold",
        fontSize : 16,
        left : 0
    },
    copyright : {
        fontFamily : "Manrope_600SemiBold",
        fontSize : 16,
        marginLeft : "auto"
    }
});
export default SignUp;
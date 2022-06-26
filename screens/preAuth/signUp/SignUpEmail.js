import React, { useState } from "react";
import { StyleSheet, Text, View , ImageBackground, Image, Pressable } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const SignUpEmail = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_800ExtraBold
    });

    function navigateToSignIn(){
      navigation.navigate('signIn');
    }

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')  
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [isPasswordConfirmSecure, setIsPasswordConfirmSecure] = useState(true);


    // if (!fontsLoaded) {
    //   return <AppLoading />;
    // } else {
      return (
          <View style={styles.container}>
              <ImageBackground source={require('../../../assets/background/background-2.png')} resizeMode="cover" style={styles.backgroundImage}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/mycoins-logo-full.png')}
                    resizeMode="contain"
                />
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Create Account
                    </Text>
                    <View style={styles.fields}>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            label="First Name"
                            theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email Address"
                            label="Email Address"
                            theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={isPasswordSecure}
                            textContentType="password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                            right={
                                <TextInput.Icon
                                    name={() => <MaterialCommunityIcons name={isPasswordSecure ? "eye-off" : "eye"} size={28} color={isPasswordSecure ? "#D9D9D9" : "black"} />} // where <Icon /> is any component from vector-icons or anything else
                                    onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
                            />}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            secureTextEntry={isPasswordConfirmSecure}
                            textContentType="password"
                            value={passwordConfirm}
                            onChangeText={text => setPasswordConfirm(text)}
                            theme={{ colors: { text: "black", primary: "#5200FF", background : "transparent" } }}
                            right={
                                <TextInput.Icon
                                    name={() => <MaterialCommunityIcons name={isPasswordConfirmSecure ? "eye-off" : "eye"} size={28} color={isPasswordConfirmSecure ? "#D9D9D9" : "black"} />} // where <Icon /> is any component from vector-icons or anything else
                                    onPress={() => { isPasswordConfirmSecure ? setIsPasswordConfirmSecure(false) : setIsPasswordConfirmSecure(true) }}
                            />}
                        />
                        <Pressable style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>Let's get started</Text>
                        </Pressable>
                        <Text style={styles.cardSignInText}>
                            Already have an account ? <Text style={styles.cardSignInTextLink} onPress={navigateToSignIn}>Log In</Text>
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
      height : 700,
      top : 190,
      borderRadius : 30,
      alignItems: "center"
    },
    cardTitle : {
      fontFamily : "Manrope_800ExtraBold",
      fontSize : 30,
      marginTop : 30
    },
    fields : {
        flex : 1,
        position : "absolute",
        top : 110
    },
    input: {
        height: 60,
        width : 380,
        margin: 12,
        borderRadius : 23,
        fontSize : 19,
        marginBottom : 0
    },
    loginButton : {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 47,
        width : 300,
        borderRadius: 16,
        elevation: 3,
        backgroundColor: '#2D0C92',
        marginTop : 40
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
        marginTop : 15,
        fontSize : 15,
        textAlign : "center"
    },
    cardSignInTextLink : {
        fontFamily : "Manrope_800ExtraBold"
    },
    footer: {
        flexDirection : "row",
        position : "absolute",
        top : 470,
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
export default SignUpEmail;
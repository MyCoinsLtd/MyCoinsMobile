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

const SignIn = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_800ExtraBold
    });

    const [password, setPassword] = useState('');  
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    function navigateToSignUp(){
        navigation.navigate('signUp');
    }

    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/background/background.png')} resizeMode="cover" style={styles.backgroundImage}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/mycoins-logo-full.png')}
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
                                        source={require('../../../assets/logos/google.png')}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.cardButtonText}>Sign In with Google</Text>
                                </Pressable>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Pressable style={styles.cardSignInButton}>
                                    <Image
                                        style={styles.cardSignInButtonLogo}
                                        source={require('../../../assets/logos/apple.png')}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.cardButtonText}>Sign In with Apple</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.breakLine}>
                            <View style={styles.Line} />
                            <Text style={styles.breakLineText}>Or with email</Text>
                            <View style={styles.Line} />
                        </View>
                        <View style={styles.fields}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email address"
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
                            <Text style={styles.forgot}>
                                Forgot Password?
                            </Text>
                            <Pressable style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Sign In</Text>
                            </Pressable>
                            <Text style={styles.cardSignInText}>
                                Don’t have an account? <Text style={styles.cardSignInTextLink} onPress={navigateToSignUp}>Sign Up</Text>
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
    loginButton : {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 47,
        width : 250,
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
    },
    breakLine : {
        flexDirection: 'row',
        marginBottom: 50,
        alignItems : "center"
    },
    Line : {
        borderBottomColor: '#D9D9D9',
        borderBottomWidth : 1,
        width : 140
    },
    breakLineText : {
        paddingLeft : 5,
        paddingRight : 4,
        fontFamily : "Manrope_500Medium",
        fontSize : 16,
        color : "#454545"
    },
    fields : {
        flex : 1,
        marginBottom : 400
    },
    input: {
        height: 40,
        width : 380,
        margin: 12,
        fontSize : 19,
        marginBottom : 20
    },
    forgot: {
        color : "#2D0C92",
        fontSize : 16,
        textAlign : "right",
        paddingRight : 12
    },
    footer: {
        marginTop : 70,
        flexDirection : "row"
    },
    privacy : {
        fontFamily : "Manrope_600SemiBold",
        fontSize : 16
    },
    copyright : {
        fontFamily : "Manrope_600SemiBold",
        fontSize : 16,
        marginLeft : "auto"
    }
});
export default SignIn;
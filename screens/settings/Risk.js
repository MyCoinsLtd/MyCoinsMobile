import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, TouchableWithoutFeedback } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_700Bold,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import Loader from '../components/Loader';
import Slider from "react-native-slider";
import { DrawerActions } from '@react-navigation/native';


const Risk = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_700Bold,
        Manrope_800ExtraBold
    });

    function navigateToDeposit(){
        navigation.navigate('deposit')
    }
    function navigateToHome(){
        navigation.navigate('home')
    }
    function navigateToProfile(){
        navigation.navigate('profile')
    }
    function openMenu(){
        navigation.dispatch(DrawerActions.openDrawer());
    }
    const [risk, setRisk] = useState(8);


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
                                source={require('../../assets/icons/menu.png')}
                                resizeMode="contain"
                            />  
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={navigateToHome}>
                            <Image
                                style={styles.arrowIcon}
                                source={require('../../assets/icons/arrow-back.png')}
                                resizeMode="contain"
                            />  
                        </TouchableWithoutFeedback>
                        <Text style={styles.title}>
                            Risk assessment
                        </Text>
                    </View>
                    <Text style={styles.subtitle}>
                        Here you can decide the level of risk you want to take on with your portfolio. Choosing higher risk levels give you more exposure to market movements, while lower levels provides more stable investments. You can read more <Text style={styles.subtitleLink}>here</Text>.
                    </Text>
                </View>
                <View style={styles.mid}>
                    <Text style={styles.riskValue}>
                        {risk}
                    </Text>
                    <Slider 
                        value={risk}
                        onValueChange={text => setRisk(text)}
                        maximumValue={10}
                        minimumValue={1}
                        step={1}    
                        style={styles.slider}
                        trackStyle={styles.sliderTrack}
                        thumbStyle={styles.sliderThumb}
                        thumbTintColor="#2C0B8F"
                        minimumTrackTintColor="#CDCDCD"
                        maximumTrackTintColor="#CDCDCD"
                        animationType="spring"
                    />
                        
                </View>
                <View style={styles.bottom}>
                    <Pressable style={styles.darkButton} onPress={navigateToDeposit}>
                        <Text style={styles.buttonText}>Next</Text>
                    </Pressable>
                    <Pressable style={styles.lightButton} onPress={navigateToProfile}>
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
        left : 290
    },  
    arrowIcon : {
        width : 20,
        height : 20,
        right : 65
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
        flex: 1,
        justifyContent : "center",
        alignItems : "center"
    },
    riskValue: {
        fontSize : 40,
        fontFamily : "Manrope_800ExtraBold"
    },
    slider : {
        width : 300
    },
    sliderTrack : {
        height : 10,
        borderRadius : 25
    },
    sliderThumb : {
        width : 40,
        height : 40,
        borderRadius : 47
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
export default Risk;
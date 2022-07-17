import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, TouchableWithoutFeedback } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_700Bold,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import Loader from "../components/Loader";
import { DrawerActions } from '@react-navigation/native';



const Design = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Manrope_500Medium,
        Manrope_700Bold,
        Manrope_800ExtraBold
    });

    function navigateToDeposit(){
        navigation.navigate('deposit')
    }
    function navigateToBuilding(){
        navigation.navigate('building')
    }
    function openMenu(){
        navigation.dispatch(DrawerActions.openDrawer());
    }

    const [items, setItems] = useState([
        {
            icon : require('../../assets/icons/coins/1.png'),
            coin : "WBTC/WETH/USDC",
            eth : 5,
            value : 8452.98,
            apy : 13.5
        },
        {
            icon : require('../../assets/icons/coins/2.png'),
            coin : "USDC/USDT",
            eth : 0.4,
            value : 1825.72,
            apy : 10
        },
        {
            icon : require('../../assets/icons/coins/2.png'),
            coin : "DAI/USDC",
            eth : 0.35,
            value : 1378.45,
            apy : 2
        }
    ]);


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
                        <TouchableWithoutFeedback onPress={navigateToDeposit}>
                            <Image
                                style={styles.arrowIcon}
                                source={require('../../assets/icons/arrow-back.png')}
                                resizeMode="contain"
                            />  
                        </TouchableWithoutFeedback>
                        <Text style={styles.title}>
                            Portfolio design
                        </Text>
                    </View>
                    <Text style={styles.subtitle}>
                        Based on your risk assessment, this is a portfolio we have created. If you would like to proceed, press Confirm. Otherwise you may go back to adjust your settings. 
                    </Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.items}>
                        {
                            items.map((prop, key) => {
                                return (
                                    <View style={styles.item} key={key}>
                                        <Image
                                            style={styles.itemIcon}
                                            source={prop.icon}
                                            resizeMode="contain"
                                        /> 
                                        <View style={styles.itemContent}>
                                            <View style={styles.itemLeft}>
                                                <Text style={styles.itemCoin}>{prop.coin}</Text>
                                                <Text style={styles.itemEth}>{prop.eth} ETH</Text>
                                            </View>
                                            <View style={styles.itemRight}>
                                                <Text style={styles.itemValue}>$ {prop.value}</Text>
                                                <Text style={styles.itemApy}>{prop.apy} % APY</Text>
                                            </View>
                                        </View>
                                    </View> 
                                )
                            })
                        }
                    </View>
                    <Text style={styles.midText}>
                        Before proceeding, we recommend reading  about these investments and their risks <Text style={styles.midTextLink}>here</Text>.
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <Pressable style={styles.darkButton} onPress={navigateToBuilding}>
                        <Text style={styles.buttonText}>Confirm</Text>
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
        flex: 0.2,
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
        left : 280
    }, 
    arrowIcon : {
        width : 20,
        height : 20,
        right : 70
    },
    title : {
        right : 15,
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
    mid : {
        flex: 0.6,
        alignItems : "center"
    },
    items : {
        top : 60
    },  
    item : {
        backgroundColor : "#EFEAFF",
        display : "flex",
        flexDirection : "row",
        width : 350,
        alignItems : "center",
        marginBottom : 10,
        borderRadius : 47,
        paddingHorizontal : 20,
        paddingVertical : 10
    },
    itemIcon : {
        width : 30,
        height : 30,
        marginRight : 20
    },
    itemContent : {
        flexDirection : "row",
        left : 0,
        right : 0,
        flex : 1
    },
    itemLeft : {
        display : "flex",
        flexDirection : "column",
        alignItems : "flex-start",
        left : 0
    },
    itemCoin : {
        fontSize : 15,
        fontFamily : "Manrope_800ExtraBold"
    },
    itemEth : {
        fontSize : 13,
        fontFamily : "Manrope_500Medium"
    },
    itemRight : {
        flexDirection : "column",
        alignItems : "flex-end",
        justifyContent : "flex-end",
        marginLeft : "auto"
    },
    itemValue : {
        fontSize : 13,
        fontFamily : "Manrope_800ExtraBold",
    },
    itemApy : {
        fontSize : 13,
        fontFamily : "Manrope_500Medium"
    },
    midText : {
        paddingHorizontal : 30,
        top : 280,
        textAlign : "center",
        fontFamily : "Manrope_500Medium"
    },
    midTextLink : {
        color : "#2C0B8F",
        fontFamily : "Manrope_800ExtraBold"
    },
    bottom : {
        flex: 0.2,
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
        top : 20,
        width : 250
    },
    lightButton : {
        alignItems: 'center',
        alignSelf: "center",
        paddingVertical: 14,
        borderRadius: 35,
        elevation: 3,
        backgroundColor: '#C0BAD2',
        position : "absolute",
        top : 90,
        width : 320
    },
    buttonText : {
        fontSize: 17,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily : "Manrope_800ExtraBold"
    }
})
export default Design;
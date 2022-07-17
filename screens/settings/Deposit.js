import React from "react";
import { StyleSheet, Text, View, Image, Pressable, TouchableWithoutFeedback } from 'react-native';
import {
    useFonts,
    Manrope_500Medium,
    Manrope_700Bold,
    Manrope_800ExtraBold
  } from '@expo-google-fonts/manrope';
import Loader from "../components/Loader";
import TransakWebView from '@transak/react-native-sdk';
import { DrawerActions } from '@react-navigation/native';



const Deposit = ({navigation}) => {

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

    const transakEventHandler = (event, data) => {
        switch(event) {
          case 'ORDER_PROCESSING':
            console.log(data);
            break;
    
          case 'ORDER_COMPLETED':
            console.log(data);
            break;
    
          default:
            console.log(data);
        }
    };

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
                        <TouchableWithoutFeedback onPress={navigateToRisk}>
                            <Image
                                style={styles.arrowIcon}
                                source={require('../../assets/icons/arrow-back.png')}
                                resizeMode="contain"
                            />  
                        </TouchableWithoutFeedback>
                        <Text style={styles.title}>
                            Deposit
                        </Text>
                    </View>
                    <Text style={styles.subtitle}>
                        Please enter the amount you want to deposit. Remember only to invest what you can afford. 
                    </Text>
                </View>
                <View style={styles.mid}>
                <TransakWebView
                    queryParams={{
                        apiKey: '5e5f2802-dc1e-4414-822a-880d8974f19a',
                        environment : 'STAGING',
                        cryptoCurrencyList : 'ETH,DAI,USDT'
                    }}
                    onTransakEventHandler={transakEventHandler}
                    style={styles.transak}
                />
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
        left : 220
    }, 
    arrowIcon : {
        width : 20,
        height : 20,
        right : 120
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
        flex: 0.8,
        justifyContent : "center",
        alignItems : "center"
    },
    transak : {
        width : 400
    },
    logo : {
        width : 220,
        height : 220
    }
})
export default Deposit;
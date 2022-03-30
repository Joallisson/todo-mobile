import React, {useState, useEffect} from "react";

import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Application from 'expo-application';

import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

import styles from "./style";

export default function QrCode({navigation}){

    const [hasPermission, setHasPermission] = useState(null); //Armazena a permissão do usuário para usar a câmera
    const [scanned, setScanned] = useState(false); //Armazena se o usuário armazenou ou não o QrCode

    function getMacAddress(){
        Alert.alert(`Seu número é ${Application.androidId}`);
    }

    useEffect(() => {
        (async () => { //Função anônima assíncrona que é chamada para saber se o usuário deu ou não permissão para usar a câmera
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({data}) => { //Essa arrow function vai armazenar o conteúdo do QrCode
        setScanned(true);
        if(data === 'getmacaddress'){
            getMacAddress();
        }else{
            Alert.alert("QrCode Inválido!");
        }
    }

    return(
        <View style={styles.container}>
            <BarCodeScanner //Elemento que usa scanner do qrcode
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} //Executa o scanner da câmera para ler o qrcode
                style={StyleSheet.absoluteFillObject} //Deixa a câmera ocupando a tela toda
            />

            <View style={styles.header}>
                <Text style={styles.headerText}>Conectar com minha conta na web</Text>
            </View>
        </View>
    )
}
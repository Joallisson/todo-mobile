import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'

import styles from './styles'

//ÍCONES
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
import qrcode from '../../assets/qrcode.png'
import back from '../../assets/back.png'

export default function Header({showNotification, showBack, late, pressNotification, navigation}){

    function Back(){ //Navegadar de volta pra tela home quando clicar no botão de voltar
        navigation.navigate('Home');
    }

    return(

        <View style={styles.header}>

            { showBack ? //Se showBack for verdadeiro então aparece o ícone de voltar
            <TouchableOpacity onPress={Back} style={styles.leftIconBackContaiber /* Ícone de voltar*/}>
                <Image source={back} style={styles.leftIconBackImage}/>
            </TouchableOpacity>
            : //Senão aparece o ícone do qrcode
            <TouchableOpacity style={styles.leftIcon /* Ícone do qrcode*/}>
                <Image source={qrcode} style={styles.leftIconImage}/>
            </TouchableOpacity>
            }

            <Image source={logo} style={styles.logo /* Ícone do logotipo */}/>

            { showNotification && late > 0 && //Se showNotification for verdadeiro então aparece o ícone de notidicação
                <TouchableOpacity onPress={pressNotification} style={styles.notification /* Área do ícone de notificação */}>
                    <Image source={bell} style={styles.notificationImage}/>

                    <View style={styles.circle /* Texto da notificação */}>
                        <Text style={styles.notificationText}>{late}</Text>
                    </View>
                </TouchableOpacity> 
            }

        </View>
    )
}
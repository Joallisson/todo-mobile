import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'

import styles from './styles'

//ÍCONES
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
import qrcode from '../../assets/qrcode.png'
import back from '../../assets/back.png'

export default function Header({showNotification, showBack}){
    return(

        <View style={styles.header}>

            { showBack ? //Se showBack for verdadeiro então aparece o ícone de voltar
            <TouchableOpacity style={styles.leftIconBackContaiber /* Ícone do qrcode*/}>
                <Image source={back} style={styles.leftIconBackImage}/>
            </TouchableOpacity>
            : //Senão aparece o ícone do qrcode
            <TouchableOpacity style={styles.leftIcon /* Ícone do qrcode*/}>
                <Image source={qrcode} style={styles.leftIconImage}/>
            </TouchableOpacity>
            }

            <Image source={logo} style={styles.logo /* Ícone do logotipo */}/>

            { showNotification && //Se showNotification for verdadeiro então aparece o ícone de notidicação
                <TouchableOpacity style={styles.notification /* Área do ícone de notificação */}>
                    <Image source={bell} style={styles.notificationImage}/>

                    <View style={styles.circle /* Texto da notificação */}>
                        <Text style={styles.notificationText}>3</Text>
                    </View>
                </TouchableOpacity> 
            }

        </View>
    )
}
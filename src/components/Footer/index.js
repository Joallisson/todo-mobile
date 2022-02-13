import React from "react";
import {View, Image, Text, TouchableOpacity} from 'react-native'

import styles from './styles'

//Ícones
import add from '../../assets/add.png'
import save from '../../assets/save.png'

export default function Footer({icon}){
    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}>
                <Image source={add} style={styles.image}/>
            </TouchableOpacity>

            <Text style={styles.text}> ToDO - Organizando a sua vida </Text>

        </View>
    )
}
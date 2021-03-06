import React from "react";
import {View, Image, Text, TouchableOpacity} from 'react-native'

import styles from './styles'

//Ícones
import add from '../../assets/add.png'
import save from '../../assets/save.png'

export default function Footer({icon, onPress}){
    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image source={icon == "add" ? add : save /*SE A PROPS icon FOR IGUAL A ADD ENTÃO MOSTRA O BOTÃO DE ADICIONAR SENÃO MOSTRA O DE SALVAR*/} style={styles.image}/>
            </TouchableOpacity>

            <Text style={styles.text}> ToDO - Organizando a sua vida </Text>

        </View>
    )
}
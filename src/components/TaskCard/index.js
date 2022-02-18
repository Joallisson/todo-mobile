import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import styles from './style'
import {format} from "date-fns"

//Ícones
import iconDefault from "../../assets/default.png"

//Coleção de ícones
import typeIcons from "../../utils/typeIcons";

export default function TaskCard({done, title, when, type}){
    return(
        <TouchableOpacity style={[styles.card, done && styles.done]}>

            <View style={styles.cardLeft}>
                <Image source={typeIcons[type]} style={styles.typeActive}/>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>

            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{format(new Date(when), 'dd/MM/yyyy')}</Text>
                <Text style={styles.cardTime}>{format(new Date(when), 'HH:mm')}</Text>
            </View>

        </TouchableOpacity>
    )
}
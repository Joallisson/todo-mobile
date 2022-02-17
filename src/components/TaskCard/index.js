import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import styles from './style'
import {format} from "date-fns"

//Ícones
import iconDefault from "../../assets/default.png"

export default function TaskCard({done, title, when}){
    return(
        <TouchableOpacity style={[styles.card, done && styles.done]}>

            <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActive}/>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>

            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{format(new Date(when), 'dd/MM/yyyy')}</Text>
                <Text style={styles.cardTime}>{format(new Date(when), 'HH:mm')}</Text>
            </View>

        </TouchableOpacity>
    )
}
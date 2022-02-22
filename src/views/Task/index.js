import React, {useState} from "react";
import styles from "./style"

import {View, 
        ScrollView,
        Image,
        Text,
        TextInput,
        KeyboardAvoidingView,
        TouchableOpacity,
        Switch
} from 'react-native'

//COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'

//Ícones
import typeIcons from '../../utils/typeIcons'

export default function Task(){
    return(
        <KeyboardAvoidingView style={styles.container}>
            <Header showBack={true}/>

            <ScrollView style={{width:'100%'}}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        typeIcons.map((icon) =>(
                            <TouchableOpacity>
                                <Image key={icon} source={icon} style={styles.imageIcons}/>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} maxLength={30} placeholder={"Lembre-me de fazer..."}/>

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} maxLength={30} placeholder={"Lembre-me de fazer..."}/>

            </ScrollView>

            <Footer/>
        </KeyboardAvoidingView>
    )
}
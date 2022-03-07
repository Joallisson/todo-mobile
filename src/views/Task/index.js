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
} from 'react-native';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInputAndroid from "../../components/DateTimeInput/index.android";

//Ícones
import typeIcons from '../../utils/typeIcons';

export default function Task(){

    const [done, setDone] = useState(false);

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Header showBack={true}/>
            <ScrollView style={{width:'100%'}}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10}}>
                    {
                        typeIcons.map((icon, i) =>(
                            icon != null &&
                            <TouchableOpacity key={i}>
                                <Image key={i} source={icon} style={styles.imageIcon}/>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} maxLength={30} placeholder={"Lembre-me de fazer..."}/>

                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} multiline={true} maxLength={200} placeholder={"Detalhes da atividade que eu tenho que lembrar..."}/>

                <View style={styles.inLine}>
                    <View style={styles.inputInLine}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#EE6B26' : '#20295F'}/>
                        <Text style={styles.switchLabel}>Concluído</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>EXCLUIR</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <Footer/>
        </KeyboardAvoidingView>
    )
}
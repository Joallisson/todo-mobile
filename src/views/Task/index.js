import React, {useState, useEffect} from "react";
import styles from "./style";

import {View, 
        ScrollView,
        Image,
        Text,
        TextInput,
        KeyboardAvoidingView,
        TouchableOpacity,
        Switch,
        Alert
} from 'react-native';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInputAndroid from "../../components/DateTimeInput/index.android";

//Importando biblioteca para obter um ID Único DO CELLULAR
import * as Application from 'expo-application';

//Ícones
import typeIcons from '../../utils/typeIcons';

//APIs
import api from '../../services/api'; //Api que REST que eu desenvolvi


export default function Task({navigation, idTask /*ESSA PROPS navigation QUE TÁ DENTRO DO createSwitchNavigator DO ARQUIVO app.js*/}){

    //Dados que serão armazenados no banco de dados
    const [done, setDone] = useState(false);
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState();

    async function New(){ //Essa função será executada quando criar uma nova tarefa
        //Alert.alert(`${date}T${hour}.000`);

        if (!title) {
            return Alert.alert("Defina o nome da terefa");
        }
        if (!type) {
            return Alert.alert("Defina o tipo da terefa");
        }
        if(!description){
            return Alert.alert("Defina a descrição da terefa");
        }
        if (!date) {
            return Alert.alert("Defina a data da terefa");
        }
        if (!hour) {
            return Alert.alert("Defina o horário da terefa");
        }

        await api.post('/Task', {
            macaddress,
            title,
            description,
            type,
            when: `${date}T${hour}.000`
        }).then(() => {
            navigation.navigate('Home');
        });
    };



    useEffect(() => { //Essa função é achamda sempre que a tela carregar
        setMacaddress(Application.androidId);
    });

    return(
        <KeyboardAvoidingView keyboardVerticalOffset={-100/*DEIXAR O FOOTER SEM APARECER*/} behavior="height" style={styles.container}>
            <Header navigation={navigation} showBack={true}/>
            <ScrollView style={{width:'100%'}}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10}}>
                    {
                        typeIcons.map((icon, index) =>(
                            icon != null &&
                            <TouchableOpacity onPress={() => setType(index)} key={index}>
                                <Image key={index} source={icon} style={[styles.imageIcon, type && type != index && styles.typeIconInative]}/>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

                <Text style={styles.label}>Título</Text>
                <TextInput 
                onChangeText={(text) => setTitle(text)}
                value={title}
                style={styles.input} 
                maxLength={30} 
                placeholder={"Título..."}/>

                <Text style={styles.label}>Detalhes</Text>
                <TextInput 
                onChangeText={(text) => setDescription(text)}
                value={description}
                style={styles.inputArea} 
                multiline={true} 
                maxLength={200} 
                placeholder={"Detalhes da atividade que eu tenho que lembrar..."}/>

                <DateTimeInputAndroid type={'date'} save={setDate}/>
                <DateTimeInputAndroid type={'hour'} save={setHour}/>

                {idTask ?
                <View style={styles.inLine /*BOTÕES DE CONCLUIR E EXCLUIR*/}>
                    <View style={styles.inputInLine}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#EE6B26' : '#20295F'}/>
                        <Text style={styles.switchLabel}>Concluído</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>EXCLUIR</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={{paddingBottom: 100}}/> //Senão aparecer os botões acima, então deve ser exibid uma view com um espaçamento
                }

            </ScrollView>

            <Footer icon={'save'} onPress={New}/>
        </KeyboardAvoidingView>
    )
}
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
        Alert,
        ActivityIndicator
} from 'react-native';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInputAndroid from "../../components/DateTimeInput/index.android";

import {format, isPast} from "date-fns";

//Importando biblioteca para obter um ID Único DO CELLULAR
import * as Application from 'expo-application';

//Ícones
import typeIcons from '../../utils/typeIcons';

//APIs
import api from '../../services/api'; //Api que REST que eu desenvolvi


export default function Task({navigation /*ESSA PROPS navigation QUE TÁ DENTRO DO createSwitchNavigator DO ARQUIVO app.js*/}){

    //Dados que serão armazenados no banco de dados
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState();
    const [load, setLoad] = useState(true); //ìcone de load, e a tela já abre carregando
    const [taskNewScreen, setTaskNewScreen] = useState(true);

    async function SaveTask(){ //Essa função será executada quando criar uma nova tarefa
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

        if(isPast(new Date(`${date}T${hour}.000`))){
            return Alert.alert("Você não pode adicionar uma data no passado!");
        }

        if (id) { //Se tiver id então é pra atualizar uma tarefa

            console.log(`DATA ATUALIZADA: ${date}T${hour}.000`);

            await api.put(`/Task/${id}`, {
                macaddress,
                title,
                done,
                description,
                type,
                when: `${date}T${hour}.000`
            }).then(() => {
                navigation.navigate('Home');
            }).catch((error) => {
                console.log(error);
            })
        } else {
            await api.post('/Task', { //Senão tiver id então é pra cadstrar uma nova tarefa
                macaddress,
                title,
                description,
                type,
                when: `${date}T${hour}.000`
            }).then(() => {
                navigation.navigate('Home');
            });
        }

    };

    async function LoadTask(){ //Carrega as tarefas 
        await api.get(`task/${navigation.state.params.idTask}`).then(response => {
            setLoad(false);
            setType(response.data.type);
            setDone(response.data.done);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setDate(response.data.when);
            setHour(response.data.when);
        });
    }

    useEffect(() => { //Essa função é chamada sempre que a tela carregar
        setMacaddress(Application.androidId);

        if (navigation.state.params) { //Se existir o parâmetros no navigation
            setId(navigation.state.params.idTask);  //Pegando o id que veio como parâmetro pelo navigate e colocando dentro da variável de estado id
            LoadTask();
            setTaskNewScreen(false)
        }else{
            setLoad(false);
        }
    }, [hour]);

    return(
        
        <KeyboardAvoidingView keyboardVerticalOffset={-80/*DEIXAR O FOOTER SEM APARECER*/} behavior="height" style={styles.container}>
            <Header navigation={navigation} showBack={true}/>

            { load ? //Se o load for verdadeiro carrega o ícone de carregar

                <ActivityIndicator style={{marginTop: 150}} color="#EE6B26" size={50}/>
                : //Senão carrega o restante da tela
                <View/>
            }
                { (hour != undefined || taskNewScreen) && //Se a hora estiver sido setada (Signifca que o usuário clicou para visualizar ou atualizar a tarefa) ou o usuário clicou no botão para criar uma nova tarefa

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
                        placeholder={"Título..."}
                    />

                    <Text style={styles.label}>Detalhes</Text>
                    <TextInput 
                        onChangeText={(text) => setDescription(text)}
                        value={description}
                        style={styles.inputArea} 
                        multiline={true} 
                        maxLength={200} 
                        placeholder={"Detalhes da atividade que eu tenho que lembrar..."}
                    />


                    <DateTimeInputAndroid type={'date'} save={setDate} calendar={date}/>
                    <DateTimeInputAndroid type={'hour'} save={setHour} hour={hour}/>
                    
                    {id ?
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
                }
            

            <Footer icon={'save'} onPress={SaveTask}/>
        </KeyboardAvoidingView>
        
    )
}
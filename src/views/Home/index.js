import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from "react-native";
import styles from './styles';

//Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import TaskCard from "../../components/TaskCard";

//API
import api from "../../services/api"

//Importando biblioteca para obter um ID Único DO CELLULAR
import * as Application from 'expo-application';

export default function Home({navigation /*ESSA PROPS navigation QUE TÁ DENTRO DO createSwitchNavigator DO ARQUIVO app.js*/}){

    const [filter, setFilter] = useState("today") //Definindo a variavel dos filtros
    const [tasks, setTasks] = useState([]) //Definindo a variavel das tarefas
    const [load, setLoad] = useState(false) //Definindo a variavel do carregamento
    const [lateCount, setLateCount] = useState(5) //Quantidade de tarefas atrasadas
    const [macaddress, setMacaddress] = useState();

    async function loadTasks(){ //Carregar tarefas sempre que o usuário clicar nos filtros
        setLoad(true) //mostrando o símbolo de carregar as tarefas
        await api.get(`/task/filter/${filter}/${macaddress}`)
        .then(response => { //Se der tudo certo na requisição
            setTasks(response.data)
            setLoad(false) //sumindo com o símbolo de carregar as tarefas
        })
    }

    async function lateVerify(){ //Carregar tarefas sempre que o usuário clicar nos filtros
        await api.get(`/task/filter/late/${macaddress}`) //Vericar as tarefas atrasadas
        .then(response => { //Se der tudo certo na requisição
            setLateCount(response.data.length) //Conta quantas tarefas atrasadas tem
        })
    }

    function Notification(){ //Mostrar tarefas atrasadas
        setFilter("late")
    }

    function New(){
        navigation.navigate('Task');
    }

    function Show(id){ //Essa função é chamada quando o usuário quiser ver as informações das tarefas
        navigation.navigate('Task', {idTask: id /*Passando o id como parâmetro*/});
    }

    useEffect(() => {
        setMacaddress(Application.androidId);
        loadTasks()
        lateVerify()
    }, [filter])

    return (
        <View style={styles.container}>
            <Header late={lateCount} pressNotification={Notification/*passando como props uma função para mostrar as notificações*/} showNotification={true /*PASSANDO UMA PROPS DE NOTIFICAÇÃO*/} showBack={false /*PASSANDO UMA PROPS  DE VOLTAR UMA TELA*/}/>

            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter("all")}>
                    <Text style={
                        filter == "all"? styles.filterTextActived : //Se o valor da variável de estado for igual a "all" então muda o estilo
                        styles.filterTextInative
                    }>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter("today")}>
                    <Text style={
                        filter == "today" ? styles.filterTextActived : //Se o valor da variável de estado for igual a "today" então muda o estilo
                        styles.filterTextInative
                    }>Hoje</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter("week")}>
                    <Text style={
                        filter == "week" ? styles.filterTextActived : //Se o valor da variável de estado for igual a "week" então muda o estilo
                        styles.filterTextInative
                    }>Semana</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter("month")}>
                    <Text style={
                        filter == "month" ? styles.filterTextActived : //Se o valor da variável de estado for igual a "month" então muda o estilo
                        styles.filterTextInative
                    }>Mês</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter("year")}>
                    <Text style={
                        filter == "year" ? styles.filterTextActived : //Se o valor da variável de estado for igual a "year" então muda o estilo
                        styles.filterTextInative
                    }>Ano</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS {filter == 'late' && "ATRASADAS"}</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{alignItems: "center", marginLeft: 5,}}>
                {
                load ? //Se o load for verdadeiro carrega o simbolo de load
                    <ActivityIndicator style={{}} color="#EE6B26" size={50}/>

                ://Senão tiver mais carregando então mostra as tarefas para o usuário
                tasks.map(item => ( // A FUNÇÃO MAP É UM LAÇO DE REPETIÇÃO QUE PERCORRE UM ARRAY E RETORNA UM OBJETO COM AS INFORMAÇÕES
                    <TaskCard 
                        key={item._id} 
                        type={item.type} 
                        done={item.done}
                        when={item.when} 
                        title={item.title}
                        onPress={() => Show(item._id) /*ENVIANDO A FUNÇÃO SHOW PARA O COMPONENTE TaskCard COMO PROPS*/}
                    />
                ))
                }

            </ScrollView>

            <Footer onPress={New} icon={"add" /*PASSANDO UMA PROPS DE ADICIONAR*/}/>
        </View>
    )
}
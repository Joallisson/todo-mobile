import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';

//Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer"

export default function Home(){

    const [filter, setFilter] = useState("today")

    return (
        <View style={styles.container}>
            <Header showNotification={true /*PASSANDO UMA PROPS DE NOTIFICAÇÃO*/} showBack={false /*PASSANDO UMA PROPS  DE VOLTAR UMA TELA*/}/>

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

            <Footer icon={"add" /*PASSANDO UMA PROPS DE ADICIONAR*/}/>
        </View>
    )
}
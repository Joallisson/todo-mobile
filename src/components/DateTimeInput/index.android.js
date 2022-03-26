import React, { useState, useEffect} from "react";
import DateTimePicker from '@react-native-community/datetimepicker'; //Importando DateTimePicker que é responsável por capturar a data e hora
import format from "date-fns/format"; //Importando função para formatar datas
import { isPast, getMonth, getDate, getYear, getHours, getMinutes} from 'date-fns';
import {
    TouchableOpacity,
    Image,
    TextInput,
    Alert
} from 'react-native';

import styles from './styles';

//Ícones
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';



export default function DateTimeInputAndroid({type, save, calendar, hour}){
    const [date, setDate] = useState(new Date()); //Criando variável de estado que recebe um objeto do tipo data que pega a data e hora atual
    const [mode, setMode] = useState('date'); //Criando variável de estado que recebe um valor 'date' como padrão
    const [show, setShow] = useState(false); //Criando variável de estado que determina se mostra ou não o calendário ou relógio pro usuário escolher


    const onChange = (event, selectedDate) => { //Função que serve para atribuir nas váriaveis criadas a data e hora e se mostra ou esconde o calendário e o relógio
        const currentDate = selectedDate || date; //Criando constante que recebe: ou a data e hora selecionadas pelo usuário, ou a data e hora atual

        //Data do dia escolhido
        const month = getMonth(currentDate);
        const day = getDate(currentDate);
        const year = getYear(currentDate);
        const hours = getHours(currentDate);
        const minutes = getMinutes(currentDate);
        const dataEcolhida = new Date(year, month, day, hours, minutes, 59); //Montando uma nova data atual com a data escolhida

        if (isPast(dataEcolhida)) {//Se a data escolhida estiver no passado
          Alert.alert("Você não pode escolher uma data no passado");
          setShow(false); //Quando o usuario escolher a data ou hora, então o componente que seleciona a data e hora não será mais exibido
          setDate(new Date());

        }else{//Se a data escolhida não estiver no passado
          setShow(false); //Quando o usuario escolher a data ou hora, então o componente que seleciona a data e hora não será mais exibido
          setDate(currentDate); //Atribuindo a constante "currentDate" a variável de estado "date" para determinar a data e hora
          //setShow(Platform.OS === 'ios'); //Verificando qual a plataforma do que o app está rodando

          if (type == 'date') {
            save(format(currentDate, 'yyyy-MM-dd')); //Modificando o date para ficar no formato do MongoDB

          } else {
            save(format(currentDate, 'HH:mm:ss')); //Modificando o hour para ficar no formato do MongoDB
          }
        }
    };


    useEffect(() => {
      if(type == 'date' && calendar != undefined){ //Se o usuṕario quiser visualizar ou atualizar uma tarefa
        setDate(new Date(calendar));
        save(format(new Date(calendar), 'yyyy-MM-dd')); //Modificando o date para ficar no formato do MongoDB
      }

      if(type == 'hour' && hour != undefined){ //Se o usuṕario quiser visualizar ou atualizar uma tarefa
        setDate(new Date(hour));
        save(format(new Date(hour), 'HH:mm:ss')); //Modificando o date para ficar no formato do MongoDB
      }
    }, [])
    

    function showMode(currentMode){ //Esta função é chamada pelos metódos que "showDatepicker" e "showTimepicker" e determina se o que vai ser mostrado ao usuário é o calendário ou o relógio pro usuário escolher
        setShow(true); //Mostra o calendário ou o relógio
        setMode(currentMode); //Atribui o modo (calendário ou relógio) que o usuário escolheu para a variável de estado "mode"
    }
    
      function showDatepicker(){ //Mostra o calendário
        showMode('date'); //Determina o modo calenário para ser exibido ao usuário
      }
    
      function showTimepicker(){ //Mostra o relógio
        showMode('time'); //Determina o modo relógio para ser exibido ao usuário
      }

      async function selectDataOrHour(){
          if (type == 'date') {
            showDatepicker();

          }else if(type == 'hour'){
            showTimepicker();

          }
      }

      return (
        <TouchableOpacity onPress={selectDataOrHour}>
          <TextInput
            style={styles.input}
            placeholder={type == 'date' ? "Clique aqui para definir a data..." : "Clique aqui para definir a hora..."}
            editable={false}
            value={ type == 'date' ? format(date, 'dd/MM/yyyy') : format(date, 'HH:mm')}
          />

          <Image
            style={styles.iconTextInput}
            source={type == 'date' ? iconCalendar : iconClock}
          />
          
          {show && (
            <DateTimePicker //Componente que mostra a data e hora para o usuário
              //PARÂMETROS DE CONFIGURAÇÃO DO COMPONENTE
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              MinimumDate = { new  Date ( 2022 ,  3 ,  22 ) }
              onChange={onChange}
            />
          )}

        </TouchableOpacity>
      );
}
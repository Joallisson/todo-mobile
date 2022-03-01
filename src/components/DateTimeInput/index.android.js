import React, { useState } from "react";
import {
    TouchableOpacity,
    Image,
    TextInput,
    DatePickerAndroidDateSetAction,
    TimePickerAndroidTimeSetAction
} from 'react-native';

import styles from './styles'

//Ícones
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function DateTimeInputAndroid({type}){
    const [dateTime, setDateTime] = useState();

    async function selectDataOrHour(){ //Função caso o usuario escolher selecionar a data ou a hora
        if(type == 'date'){ //Caso o usuario escolha a data
            const {} = await DatePickerAndroidDateSetAction.open({
                
            })
        }
    }
}
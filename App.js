import { SafeAreaView, StatusBar } from 'react-native';

import Home from './src/views/Home';
import Task from './src/views/Task';

import {createAppContainer, createSwitchNavigator} from 'react-navigation'; //Biblioteca para navegação entre telas

const Routes = createAppContainer( //Cria um container que contém as telas
  createSwitchNavigator({ //Cria a navegação entre as telas
    Home,
    Task
  })
);

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle='light' backgroundColor={"#20295f"}/>
      <Routes/>
    </SafeAreaView>
  );
}


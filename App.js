import { SafeAreaView, StatusBar } from 'react-native';

import Home from './src/views/Home'
import Task from './src/views/Task'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle='light' backgroundColor={"#20295f"}/>
      <Task/>
    </SafeAreaView>
  );
}


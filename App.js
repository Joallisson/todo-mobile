import { SafeAreaView, StatusBar } from 'react-native';

import Home from './src/views/Home'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' backgroundColor="#20295f"/>
      <Home/>
    </SafeAreaView>
  );
}


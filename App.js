import { SafeAreaView, StatusBar } from 'react-native';

import Home from './src/views/Home'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle='light' backgroundColor={"#20295f"}/>
      <Home/>
    </SafeAreaView>
  );
}


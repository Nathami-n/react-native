import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View className=' flex justify-center items-center h-screen' >
      <Text >Aora!</Text>
      <StatusBar style="auto" />
      <Link href='/profile' style={{color: "black"}}> Go to profile</Link>
    </View>
  );
}

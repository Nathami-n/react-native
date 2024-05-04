import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View className=' flex justify-center items-center h-screen' >
      <Text className='font-pblack ' >Aora!</Text>
      <StatusBar style="auto" />
      <Link href='/home' style={{color: "black"}}> Go to home</Link>
    </View>
  );
}

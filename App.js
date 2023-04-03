import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [checked,setChecked]=useState('Apple')
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <RadioButton
        value='Apple'
        status={checked==='Apple'?'checked':'unchecked'}
        onPress={()=>setChecked('Apple')}
        />
        <Text style={{color: checked === 'Apple' ? 'red' : 'black'}}>Apple</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <RadioButton
        value='Samsung'
        status={checked==='Samsung'?'checked':'unchecked'}
        onPress={()=>setChecked('Samsung')}
        />
        <Text  style={{color: checked === 'Samsung' ? 'red' : 'black'}}>Samsung</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <RadioButton
        value='Oppo'
        status={checked==='Oppo'?'checked':'unchecked'}
        onPress={()=>setChecked('Oppo')}
        />
        <Text  style={{color: checked === 'Oppo' ? 'red' : 'black'}}>Oppo</Text>
      </View>
      
      
      <Text style={{marginLeft:20,marginTop:20,fontSize:20,fontWeight:'bold',color:'red'}}>{checked}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50,
    marginLeft:15,
  },
});

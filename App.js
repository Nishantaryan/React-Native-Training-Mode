import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet } from 'react-native';

const App = () => {
  const [setGoal,getGoal] = useState('');
  const userInput = () => {
      getGoal(text); 
  }
  const printOnConsole = ""  ;

  return (
       <View style = {styles.container} >
           <View>
               <TextInput onChangeText = {userInput} style = {styles.textInput}/>
               <Button title = "Add" onPress = {printOnConsole} />
           </View>
           
           <View>

  </View>
       </View>

  );
  }

  const styles = StyleSheet.create({
    container : {
      padding : 50
    },
    textInput : {
      borderWidth : 1,
      borderColor : 'black'
    }
  })

export default App;

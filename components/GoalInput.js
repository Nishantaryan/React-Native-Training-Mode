import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet,FlatList, TouchableOpacity } from 'react-native';

 

const GoalInput = props => {
    const [setText,getText] = useState('');

  
    const getUserText = (text) => {
        getText(text);
      }  


      
    


  
    return(
       
        <View>
        <TextInput style={styles.inputText} onChangeText = {getUserText} />
        <Button title = "Add" onPress = {props.parentClick.bind(this,setText)} />
      </View>
    
    ) 
}

const styles = StyleSheet.create({
    inputText : {
        borderWidth : 1
     }
})




export default GoalInput;
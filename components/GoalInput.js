import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet,FlatList, TouchableOpacity,Modal } from 'react-native';

 

const GoalInput = props => {
    const [setText,getText] = useState('');

  
    const getUserText = (text) => {
        getText(text);
      }  


      
    
    

  
    return(
       <Modal  visible = {props.visible} animationType="slide" >
        <View>
        <TextInput style={styles.inputText} onChangeText = {getUserText} />
        <Button title = "Add" onPress = {props.parentClick.bind(this,setText)} />
        <Button title = "Cancel"   onPress = {props.modalClick} />
      </View>
      </Modal>
    ) 
}

const styles = StyleSheet.create({
    inputText : {
        borderWidth : 1
     },
    viewer : {
        flex : 1 ,
        justifyContent : "center",
        alignItems : "center"
    } 
})




export default GoalInput;
import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet,FlatList,TouchableOpacity } from 'react-native';

 

const GoalList = props => {
      return(
        <TouchableOpacity onPress = {props.onDelete.bind(this,props.id)} >
        <Text style = {styles.listStyle}>{props.title}</Text>
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
    listStyle : {
        padding : 20,
        borderWidth : 1
         
      }
})

export default GoalList;
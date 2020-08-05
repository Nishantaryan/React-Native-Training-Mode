import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet,FlatList } from 'react-native';

 

const GoalList = props => {
      return(
        <Text style = {styles.listStyle}>{props.title}</Text>
      )
}

const styles = StyleSheet.create({
    listStyle : {
        padding : 20,
        borderWidth : 1
         
      }
})

export default GoalList;
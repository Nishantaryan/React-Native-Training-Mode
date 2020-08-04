import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet,FlatList } from 'react-native';


const GoalList = props => {
    return (
    <View>
    <Text>{props.title}</Text>
  </View>  
    )
}

export default GoalList;

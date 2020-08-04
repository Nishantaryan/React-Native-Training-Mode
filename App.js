import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet,FlatList } from 'react-native';
import GoalList from './components/GoalList';
 

const App = () => {
 
  
const [goalsItems,variableForHoldingUserText] = useState('');
const [goalsArray,goalsEmptyArray] = useState([]);

  const getUserInput = (text) => {
    variableForHoldingUserText(text);
  }

  const onButtonTouch = () => {
     goalsEmptyArray(existingGoal =>  [...existingGoal, { id : Math.random().toString()  , value : goalsItems  }
    ] );
    };
  
  

  return (
       <View style = {styles.container} >
           <View>
               <TextInput onChangeText = {getUserInput} style = {styles.textInput}/>
               <Button title = "Add" onPress={onButtonTouch} />
           </View>

          <FlatList 
                   style = {styles.listItem} 
                   data = {goalsArray} 
                   keyExtractor = { (item,index) => item.id} 
                   renderItem={itemIterator => (
                     <GoalList title = {itemIterator.item.value}/>
          )} />
        
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
    },
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
  })

export default App;

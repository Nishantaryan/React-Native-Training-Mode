import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet,FlatList } from 'react-native';

 

const App = () => {
 
  const [setText,getText] = useState('');
  const [goalsArray,UserGoals] = useState([]);
  const getUserText = (text) => {
    getText(text);
  }      

  const getUserGoals = () => {
    UserGoals(currentGoals => [...currentGoals,{key : Math.random().toString() , value : setText}]) ;

  }
   
  

  const showUserInput = () => {
    console.log(setText);
  }
  
  

  return (
       <View style = {styles.container}>
         <View>
           <TextInput style={styles.inputText} onChangeText = {getUserText} />
           <Button title = "Add" onPress = {getUserGoals} />
         </View>
         <View>
            <FlatList keyExtractor= {(item,index) => item.key} 
                      data = {goalsArray}
                      renderItem = {itemIterator => 
                      <Text style = {styles.listStyle}>{itemIterator.item.value  }</Text> }  />
         </View>
       </View>

  );
  
          }
 
const styles = StyleSheet.create({
  container : {
    padding : 20
  },
  inputText : {
     borderWidth : 1
  },
  listStyle : {
    padding : 20,
    borderWidth : 1,
     
  }
})          

export default App;

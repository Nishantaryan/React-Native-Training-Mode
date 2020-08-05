import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet,FlatList } from 'react-native';
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';


const App = () => {
 
  const [goalsArray,UserGoals] = useState([]);



  

  const showUserInput = () => {
    console.log(setText);
  }
  const getUserGoals = enteredGoal => {
    UserGoals(currentGoals => [...currentGoals,{key : Math.random().toString() , value : enteredGoal}]) ;

  }



  return (
       <View style = {styles.container}>
         
          <GoalInput parentClick = {getUserGoals} />
         <View>
            <FlatList keyExtractor= {(item,index) => item.key} 
                      data = {goalsArray}
                      renderItem = {itemIterator => 
                        <GoalList title = {itemIterator.item.value} />
                       }  />
         </View>
       </View>

  );
  
          };
 
const styles = StyleSheet.create({
  container : {
    padding : 20
  }
  
 
})          

export default App;

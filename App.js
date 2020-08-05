import React, { useState } from 'react';
import { Text, View,TextInput,Button,StyleSheet,FlatList } from 'react-native';
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';


const App = () => {
 
  const [goalsArray,UserGoals] = useState([]);
  const [isModalOpen,setModalVisibility] = useState(false);


  

  const showUserInput = () => {
    console.log(setText);
  }
  const getUserGoals = enteredGoal => {
    UserGoals(currentGoals => [...currentGoals,{key : Math.random().toString() , value : enteredGoal}]) ;
    setModalVisibility(false);
    
  }
 const  UpdateStateOnDelete = Id => {
       UserGoals(currentGoals => {
         return currentGoals.filter((goal) => goal.key !== Id);
       })   
 } 
  
 const setModalProperty = () => {
  setModalVisibility(true);
 }
 
 const removeModal =  ()  => {
  setModalVisibility(false);
}
 

  return (
       <View style = {styles.container}>
         <Button title = "Add Goal" onPress={setModalProperty}/>
          <GoalInput visible = {isModalOpen} parentClick = {getUserGoals} modalClick = {removeModal}  />
         <View>
            <FlatList keyExtractor= {(item,index) => item.key} 
                      data = {goalsArray}
                      renderItem = {itemIterator => 
                        <GoalList title = {itemIterator.item.value} id = {itemIterator.item.key}  onDelete= {UpdateStateOnDelete}/>
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

import React, { useState } from 'react'
import {View, Text,Image, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


 const App = () => {

  const [items, setItems] = useState([

    {id: 1, text: 'Milk'},
    {id: 2, text: 'Egg'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
    {id: 5, text: 'Fruits'},
  ]);

  let id = items.length + 1;


  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  } 

  const addItem = (text) => {
    if(text){
      setItems(prevItems => {
        return [{id: id, text },...prevItems ];
      });
    }
  }


  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem} key={id}/>
      <FlatList  data={items}
       renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem}/>
      )} />
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },

})

export default App;
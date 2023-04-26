import React from 'react'
import {View, Text,Image, StyleSheet} from 'react-native';

 const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}


Header.defaultProps = {
    title: 'Shopping list'
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding:20,
    backgroundColor: 'darkslateblue',
    
    
  },

  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    
  }

})

export default Header;
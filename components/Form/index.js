import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'


const Form = (props) => {
  
  const handleAddTask=()=>{
    props.onAddTask();
    Keyboard.dismiss();
  }
  return (
    <View style={styles.addTask}>   
      <TextInput 
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder='Your Task' 
        style={styles.input}/>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.inputButton}>
          <Text style={styles.icon}>{props.isEdit ? '?' : '+'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Form
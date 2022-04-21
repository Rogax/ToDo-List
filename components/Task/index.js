import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const Task = (props) => {
  const {number}= props;
  const numberText= number <10 ? `0${number}` : number;
  return (
    <TouchableOpacity onPress={props.onDeleteEditTask}>
      <View style={styles.items}>
        <View style={styles.square}>
            <Text style={styles.index}>{numberText}</Text>
        </View>
        <Text style={styles.content}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Task
import {Text, View, ScrollView, Alert, Keyboard} from 'react-native';
import Task from './components/Task';
import styles from './App.components';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [taskList, setTaskList]= useState([]);
  const [value, setValue] = useState('')
  const [indexEdit, setIndexEdit] = useState(-1)
  const handleAddEditTask=()=>{
    if(indexEdit==-1){
      setTaskList([...taskList, value])
      setValue('')
    }
    else{
      setTaskList(taskList.map((item, index) => {
        return index === indexEdit ? value : item
      }))
      setIndexEdit(-1)
      setValue('')
    }
  }

  const handleDeleteEditTask = (index)=>{
    Alert.alert(
      "Alert",
      "Do you want to edit or delete?",
      [
        {
          text: "Delete",
          onPress: () => {
            let taskListTmp=[...taskList];
            taskListTmp.splice(index,1);
            setTaskList(taskListTmp);
          }
        },
        { 
          text: "Edit", 
          onPress: () => {
          setValue(taskList[index])
          setIndexEdit(index)
          }
        }
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>{
          taskList.map((item, index) =>{
            return <Task key={index} title={item} number={index+1} onDeleteEditTask={()=>handleDeleteEditTask(index)}/>
          })
        }
        </ScrollView>       
      </View>
      <Form isEdit={indexEdit !== -1} onAddTask={handleAddEditTask} value={value} onChangeText={(value) => setValue(value)}/>  
    </View>
  );
}

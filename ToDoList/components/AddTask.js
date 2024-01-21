import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
  const [inputTitle, setInputTitle] = useState('');

  const handleAddTask = () => {
    if (inputTitle.trim() !== '') {
      onAddTask(inputTitle.trim());
      setInputTitle('');
    }
  };

  return (
    <View style={styles.addTodoForm}>
      <TextInput
        style={styles.input}
        placeholder="Enter new To Do"
        value={inputTitle}
        onChangeText={(text) => setInputTitle(text)}
        keyboardType="default"
        returnKeyType="done"
      />
      <Button title="Add To Do Item" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;
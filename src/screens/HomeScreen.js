import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { ScrollView, Button } from 'react-native';


function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]); // Add the new task to the existing list
  };

  return (
    <MainLayout>
      <ScrollView>
        <ToDoList tasks={tasks} /> 
      </ScrollView>

      <ToDoForm addTask={addTask} tasks={tasks} /> 
      
      <Button title="Go to About"
      onPress={() => navigation.navigate('About')}
    />

    </MainLayout>
  );
}

export default HomeScreen;

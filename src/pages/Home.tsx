import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (newTaskTitle: string) => {
    const newTask: Task = {
      id: tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1,
      title: newTaskTitle,
      done: false
    }

    setTasks([...tasks, newTask])
  }

  const handleToggleTaskDone = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  const handleRemoveTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventForm from './EventForm';
import EventList from './EventList';

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your Events"
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add an Event"
    })
  }
})
 export default createAppContainer(AppNavigator);




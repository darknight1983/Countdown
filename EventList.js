import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import EventObj from './db.json';
import EventCard from './EventCard'

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3',
    }
})

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                }))
            })
        })
        this.setState({
            events: EventObj.events.map(e => ({
                ...e,
                date: new Date(e.date)
            }))
        })
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }
    render() {
        return [
            <FlatList
              data={this.state.events}
              renderItem={({item}) => <EventCard event={item}/>}
              keyExtractor={(item) => item.id}
              style={styles.list}
            />,
            <ActionButton
                key="fab"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231, 76, 6, 1)"
            />
        ]
    }
}

export default EventList;

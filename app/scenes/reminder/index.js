import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Button,
    Header,
    Title,
    View,
    Left,
    Right,
    Text,
    List,
    ListItem,
    Switch,
    Footer
} from 'native-base';
import {
    TextInput,
    DatePickerIOS
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

class ReminderScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            notificationStatus: false,
            notificationTime : (new Date()),
            time: (new Date()),
            showTimePicker: false
        };
    }

    goBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onValueChange(value){
        this.setState({
            notificationStatus: value
        });
    }

    save(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onDateChange(time){
        this.setState({
            time: (new Date(time))
        });
    }

    timeFormat(){
        var hours = this.state.notificationTime.getHours();
        var mins = this.state.notificationTime.getMinutes();
        var t = 'AM';
        if(hours > 12){
            t = 'PM';
            hours -= 12;
        }

        return (hours > 9? hours: "0" + hours )+ ":" + (mins > 9? mins: "0" + mins) + " " + t;
    }

    showPicker(){
        this.setState({
            showTimePicker: true,
            time: this.state.notificationTime
        });
    }

    pickerCancel(){
        this.setState({
            showTimePicker: false
        });
    }
    
    pickerDone(){
        this.setState({
            notificationTime: this.state.time,
            showTimePicker: false
        });
    }

    render(){
        return (
            <Container>
                <Header style={styles.header}>
                    <Left style={styles.headerIconContainer}>
                        <Button transparent onPress={() => this.goBack()}>
                            <Text style={styles.headerBtnText}>Cancel</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerTitle}>REVIEW REMINDERS</Title>
                    </Body>
                    <Right style={styles.headerIconContainer}>
                        <Button transparent onPress={() => this.save()}>
                            <Text style={styles.headerBtnText}>Save</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>Notification On</Text>
                            </Body>
                            <Right>
                                <Switch value={this.state.notificationStatus} onValueChange={(value) => this.onValueChange(value)}/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.showPicker()}>
                            <Body>
                                <Text style={styles.listItemText}>Notification Time</Text>
                            </Body>
                            <Right>
                                <Text style={styles.listItemText}>{this.timeFormat()}</Text>
                            </Right>
                        </ListItem>
                    </List>                 
                </Content>
                {this.state.showTimePicker?
                <View>
                    <View style={styles.timePickerControl}>                    
                        <Button transparent onPress={() => this.pickerCancel()}>
                            <Text style={styles.timePickerCancelBtnText}>Cancel</Text>
                        </Button>                
                        <Button transparent onPress={() => this.pickerDone()}>
                            <Text style={styles.timePickerDoneBtnText}>Done</Text>
                        </Button>                    
                    </View>
                    <DatePickerIOS 
                            minuteInterval={1}
                            mode='time'
                            date={this.state.time}
                            onDateChange={(date) => this.onDateChange(date)}
                            timeZoneOffsetInMinutes={-this.state.notificationTime.getTimezoneOffset()}/>
               </View>: null}
            </Container>
        );
    }
}

export default connect()(ReminderScreen);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Button,
    Header,
    Title,
    List,
    ListItem,
    Right,
    Text,
    Icon,
    View
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class SettingScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            email: 'parker@gmail.com',
            first_name: 'Parker',
            last_name: 'Smith'
        };
    }

    goToReminder(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({
            routeName: 'Reminder'
        }));
    }

    goToFieldUpdate(field, value){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({
            routeName: 'FieldUpdate',
            params: {
                field: field,
                value: value
            }
        }));
    }

    render(){
        return (
            <Container>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.headerTitle}>SETTINGS</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem button style={styles.listItem} onPress={() => this.goToFieldUpdate('Email', this.state.email)}>
                            <Body>
                                <Text>Email</Text>
                            </Body>
                            <Right>
                                <View style={styles.valueContainer}>
                                    <Text style={styles.valueText}>{this.state.email}</Text>
                                    <Icon name="arrow-forward" style={styles.valueIcon}></Icon>
                                </View>                                
                            </Right>
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => this.goToFieldUpdate('First Name', this.state.first_name)}>
                            <Body>
                                <Text>First Name</Text>
                            </Body>
                            <Right>
                                <View style={styles.valueContainer}>
                                    <Text style={styles.valueText}>{this.state.first_name}</Text>
                                    <Icon name="arrow-forward" style={styles.valueIcon}></Icon>
                                </View>                                
                            </Right>
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => this.goToFieldUpdate('Last Name', this.state.last_name)}>
                            <Body>
                                <Text>Last Name</Text>
                            </Body>
                            <Right>
                                <View style={styles.valueContainer}>
                                    <Text style={styles.valueText}>{this.state.last_name}</Text>
                                    <Icon name="arrow-forward" style={styles.valueIcon}></Icon>
                                </View>                                
                            </Right>
                        </ListItem>
                        <ListItem style={styles.divider}/>                            
                        <ListItem button style={styles.listItem} onPress={() => this.goToReminder()}>
                            <Body>
                                <Text>Review Reminders</Text>
                            </Body>
                            <Right>
                                <View style={styles.valueContainer}>
                                    <Icon name="arrow-forward" style={styles.valueIcon}></Icon>
                                </View>                                
                            </Right>
                        </ListItem>
                        <ListItem style={styles.divider}/> 
                        <ListItem button style={styles.listItem}>
                            <Body>
                                <Text>Legal</Text>
                            </Body>
                            <Right>
                                <View style={styles.valueContainer}>
                                    <Icon name="arrow-forward" style={styles.valueIcon}></Icon>
                                </View>                                
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default connect()(SettingScreen);
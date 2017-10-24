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
    ListItem
} from 'native-base';
import  {
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class FieldUpdateScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            value: this.props.navigation.state.params.value
        };
    }

    goBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onChangeText(text){
        this.setState({
            value: text
        });
    }

    save(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    render(){
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.goBack()}>
                            <Text style={styles.headerBtnText}>Cancel</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerTitle}>{this.props.navigation.state.params.field}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.save()}>
                            <Text style={styles.headerBtnText}>Save</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem style={styles.listItem}>
                            <TextInput style={styles.inputText} value={this.state.value} onChangeText={(text) => this.onChangeText(text)}/>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default connect()(FieldUpdateScreen);
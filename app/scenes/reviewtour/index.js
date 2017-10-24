import React, { Component } from 'react';
import  { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Header,
    Title,
    Text,
    Button,
    Thumbnail,
    View
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-fa-icons';
import styles from './styles';

class ReviewTourScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
    }

    start(){
        var  { dispatch } = this.props;
        dispatch(NavigationActions.navigate({
            routeName: 'Review'
        }));
    }

    render(){
        return (
            <Container>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.headerTitle}>SATURDAY'S REVIEW</Title>
                    </Body>
                </Header>
                <Content padder style={styles.content}>
                    <Body style={styles.body}>
                        <View style={styles.wrapper}>
                            <Icon name="refresh" style={styles.centerIcon}/>
                            <Text style={styles.welcomeText}>
                                Welcome to Review, Parker!
                            </Text>
                            <Text style={styles.welcomeDes}>
                                You're only a few minutes away from knowing what you know, better! You will be through before you know it.
                            </Text>
                            <View style={styles.btnContainer}>
                                <Button style={styles.startBtn} onPress={() => this.start()}>
                                    <Text style={styles.startBtnText}>Get Started</Text>
                                </Button>
                            </View>
                        </View>
                    </Body>
                </Content>
            </Container>
        );
    }
}

export default connect()(ReviewTourScreen);
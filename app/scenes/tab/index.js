import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Header,
    Content,
    Tabs,
    Tab,
    TabHeading,
    Thumbnail,
    Text,
    View,
    Footer,
    FooterTab,
    Button
} from 'native-base';
import styles from './styles';
import Icon from 'react-native-fa-icons';

import Dashboard from '../dashboard/';
import Settings from '../settings/';
import Review from '../review/';
import ReviewTour from '../reviewtour/';

class CTabs extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            selectedTabIndex: 0
        }
    }

    selectTab(index){
        this.setState({
            selectedTabIndex: index
        });
    }

    render(){
        return (
            <Container>
                {this.state.selectedTabIndex == 0?
                <ReviewTour/>: null}
                {this.state.selectedTabIndex == 1?
                <Dashboard/>: null}
                {this.state.selectedTabIndex == 2?
                <Settings/>: null}
                <Footer style={styles.footer}>
                    <FooterTab>
                        <Button onPress={() => this.selectTab(0)}>
                            <Icon name="refresh" style={[styles.tabIcon1, (this.state.selectedTabIndex == 0) && styles.tabActiveIcon]}/>
                            <Text style={[styles.tabText, (this.state.selectedTabIndex == 0) && styles.tabActiveText]}>Review</Text>
                        </Button>
                        <Button onPress={() => this.selectTab(1)}>
                            <Icon name="compass" style={[styles.tabIcon, (this.state.selectedTabIndex == 1) && styles.tabActiveIcon]}></Icon>
                            <Text style={[styles.tabText, (this.state.selectedTabIndex == 1) && styles.tabActiveText]}>Dashboard</Text>
                        </Button>
                        <Button onPress={() => this.selectTab(2)}>
                            <Icon name="cog" style={[styles.tabIcon, (this.state.selectedTabIndex == 2) && styles.tabActiveIcon]}></Icon>
                            <Text style={[styles.tabText, (this.state.selectedTabIndex == 2) && styles.tabActiveText]}>Settings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default connect()(CTabs);
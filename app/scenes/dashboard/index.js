import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Header,
    Title,
    Text,
    Button,
    Thumbnail,
    View,
    Grid,
    Col,
    Row
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-fa-icons';
import styles from './styles';

class DashboardScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            step: 0
        };
    }

    render(){
        return (
            <Container>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.headerTitle}>DASHBOARD</Title>
                    </Body>
                </Header>
                <Content padder style={styles.content}>
                    <Body style={styles.body}>
                        {this.state.step == 0?
                        <View style={styles.wrapper}>
                            <Text style={styles.topText}>There's nothing to review today, Parker!</Text>
                            <Thumbnail square source={require('../../assets/dashboard-no-review.png')} style={styles.noreviewImg}/>
                        </View>:
                        this.state.step == 1?
                        <View style={styles.wrapper}>
                            <Text style={styles.topText}>A new review is ready for you!</Text>
                            <View style={styles.centerBtnContainer}>
                                <Button style={styles.centerBtn}>
                                    <Text style={styles.centerBtnText}>Go</Text>
                                </Button>
                            </View>
                            <Text style={styles.centerText}>
                                On Dock for Today's Review
                            </Text>
                            <View style={styles.centerGrid}>
                                <Button style={styles.centerGridBtn}>
                                    <Text style={styles.centerGridBtnText}>Note 1</Text>
                                </Button>
                                <Button style={styles.centerGridBtn}>
                                    <Text style={styles.centerGridBtnText}>Note 2</Text>
                                </Button>
                                <Button style={styles.centerGridBtn}>
                                    <Text style={styles.centerGridBtnText}>Note 3</Text>
                                </Button>
                                <Button style={styles.centerGridBtn}>
                                    <Text style={styles.centerGridBtnText}>Another Note</Text>
                                </Button>
                                <Button style={styles.centerGridBtn}>
                                    <Text style={styles.centerGridBtnText}>Theorems</Text>
                                </Button>
                                <Button style={styles.centerGridBtn}>
                                    <Text style={styles.centerGridBtnText}>Note 6</Text>
                                </Button>
                            </View>
                        </View>
                        :null
                        }                        
                        <View style={styles.divider}></View>
                        <Text style={styles.textProgress}>PROGRESS</Text>
                        <Grid>
                            <Col>
                                <Button block style={styles.reviewBtn}>
                                    <View style={styles.reviewBtnContent}>
                                        <Text style={styles.reviewBtnText1}>REVIEW THIS WEEK</Text>
                                        <Text style={styles.reviewBtnText2}>7</Text>
                                    </View>
                                </Button>
                            </Col>
                            <Col>
                                <Button block style={styles.pointBtn}>
                                    <View style={styles.reviewBtnContent}>
                                        <Text style={styles.reviewBtnText1}>
                                            <Icon name="trophy" style={styles.pointBtnIcon}></Icon>  POINTS
                                        </Text>
                                        <Text style={styles.reviewBtnText2}>60023</Text>
                                    </View>
                                </Button>
                            </Col>
                        </Grid>
                    </Body>
                </Content>
            </Container>
        );
    }
}

export default connect()(DashboardScreen);
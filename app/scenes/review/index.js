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
    Left,
    Right,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-fa-icons';
import styles from './styles';

class ReviewScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            step: true
        };
    }

    answer(){
        this.setState({
            step: false
        });
    }

    goToDashboard(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({
            routeName: 'Main'
        }));
    }

    goBack(){
        var { dispatch } =  this.props;
        dispatch(NavigationActions.back());
    }

    render(){
        return (
            <Container>
                <Header style={styles.header}>
                    <Left style={styles.headerIconContainer}>
                        <Button transparent icon onPress={() => this.goBack()}>
                            <Icon name="arrow-left" style={styles.headerIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerTitle}>TODAY'S REVIEW</Title>
                    </Body>
                    <Right style={styles.headerIconContainer}/>
                </Header>
                <Content padder style={styles.content}>
                    {this.state.step == true?
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>QUESTION</Text>
                        <Text style={styles.questionDes}>
                            Describe JavaScript Disabled Problem as it relates to CSRF Prevention
                        </Text>
                        <View style={styles.questionBlockContainer}>
                            <Icon name="question-circle-o" style={styles.questionIcon}/>
                        </View>
                        <View style={styles.questionBlockContainer}>
                            <View style={styles.answerBtnWrapper}>
                                <Button style={styles.answerBtn} onPress={() => this.answer()}>
                                    <Text style={styles.answerBtnText}>Answer It</Text>
                                </Button>
                            </View>
                        </View>
                    </View>: null}
                    {this.state.step == true?
                    <View style={styles.progressContainer}>
                        <View style={styles.progressWrapper}>
                            <View style={[styles.progressValue, {width: 200}]}/>
                            <Text style={styles.progressInt}>28/30</Text>
                        </View>
                    </View>: null}
                    {this.state.step == false?
                    <Body style={styles.body}>
                        <View style={styles.wrapper}>
                            <Text style={styles.congText}>
                                Congratulations, Parker!
                            </Text>
                            <Thumbnail square source={require('../../assets/dashboard-no-review.png')} style={styles.noreviewImg}/>
                            <Text style={styles.congDes}>
                                You're all done with review today. Great work!
                            </Text>
                            <View style={styles.pointTextContainer}>
                                <Text style={styles.pointText1}>POINTS EARNED</Text>
                                <Text style={styles.pointText2}>
                                    <Icon name="trophy" style={styles.pointIcon}/> 780
                                </Text>
                            </View>
                            <Button full style={styles.goBtn} onPress={() => this.goToDashboard()}>
                                <Text style={styles.goBtnText}>Go to Dashboard</Text>
                            </Button>
                        </View>
                    </Body>
                    :null}
                </Content>
                {this.state.step == true?
                <Footer style={styles.footer}>
                    <Grid>
                        <Col style={styles.col}>                            
                            <Text style={styles.earnedText}>
                                <Icon name="trophy" style={styles.earnedIcon}/>  EARNED: <Text style={styles.earnedValue}>50</Text>
                            </Text>
                        </Col>
                        <Col style={[styles.col, {alignItems: 'flex-end'}]}>
                            <View style={styles.bonusTextContainer}>
                                <Text style={styles.bonusText}>
                                    340 BONUS
                                </Text>
                            </View>                            
                        </Col>
                    </Grid>
                </Footer>: null}
            </Container>
        );
    }
}

export default connect()(ReviewScreen);
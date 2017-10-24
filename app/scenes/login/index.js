import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Thumbnail,
    Form,
    Item,
    Footer
} from 'native-base';
import {
    TextInput,
    Linking,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import Loadingbar from '../loading/';
import { Colors } from '../../constants';
import { login } from '../../actions';

class LoginScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            loading: false
        };
    }

    onlogin(){
        if(this.state.email == "" || this.state.email.trim() == ""){
            this.showAlert("Login Failed","please input email address.");
        }else if(this.state.password == ""){
            this.showAlert("Login Failed", "please input password.");
        }else{
            //show loading
            this.setState({
                loading: true
            });

            login(this.state.email, this.state.password).then(data => {
                //hide loading
                this.setState({
                    loading: false
                });

                var { dispatch } = this.props;
                dispatch(NavigationActions.navigate({routeName: 'Main'}));
            })
            .catch(err => {
                //hide loading
                this.setState({
                    loading: false
                });
                
                this.showAlert("Login Failed",err[0]);
            });
        }        
    }

    showAlert(title, message){
        Alert.alert(title, message, [{text: 'OK'}], {cancelable: false});
    }

    openBrowser(url){
        Linking.openURL(url);
    }

    onChangeEmail(text){
        this.setState({
            email: text
        });
    }

    onChangePassword(text){
        this.setState({
            password: text
        });
    }

    render(){
        return (
            <Container style={styles.container}>
                <Content>
                    <Body style={styles.body}>
                        <Thumbnail square source={require('../../assets/zipnote_logo.png')} style={styles.logo}/>
                        <Form>
                            <Item style={styles.formItem}>
                                <TextInput 
                                    value={this.state.email} 
                                    onChangeText={(text) => this.onChangeEmail(text)}
                                    autoCapitalize="none" 
                                    placeholderTextColor={Colors.black} 
                                    placeholder="Email" 
                                    style={styles.formInput}/>
                            </Item>
                            <Item style={styles.formItem}>
                                <TextInput  
                                    value={this.state.password} 
                                    onChangeText={(text) => this.onChangePassword(text)}
                                    placeholderTextColor={Colors.black} 
                                    placeholder="Password" 
                                    style={styles.formInput}/>
                            </Item>
                        </Form>
                        <Button block style={styles.loginBtn} onPress={() => this.onlogin()}>
                            <Text style={styles.loginBtnText}>Login</Text>
                        </Button>
                        <Button transparent block style={styles.forgotBtn} onPress={() => this.openBrowser("https://www.zipnote.io/users/password/new")}>
                            <Text style={styles.forgotBtnText}>Forgot Password?</Text>
                        </Button>
                    </Body>
                </Content>
                <Footer style={styles.footer}>
                    <Button block transparent style={styles.signupBtn} onPress={() => this.openBrowser("https://www.zipnote.io/")}>
                        <Text style={styles.signupBtnText}>Sign Up</Text>
                    </Button>
                </Footer>
                {this.state.loading?<Loadingbar/>: null}
            </Container>
        );
    }
}

export default connect()(LoginScreen);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Spinner
} from 'native-base';
import styles from './styles';

class Loadingbar extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (            
            <View style={styles.container}>
                <Spinner color="white"/>
            </View>
        );
    }
}

export default connect()(Loadingbar);
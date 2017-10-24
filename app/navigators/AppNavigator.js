import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    StackNavigator,
    addNavigationHelpers
} from 'react-navigation';

import LoginScreen from '../scenes/login/';
import ReviewScreen from '../scenes/review/';
import ReminderScreen from '../scenes/reminder/';
import FieldUpdateScreen from '../scenes/fieldupdate/';
import CTabs from '../scenes/tab/';


export const AppNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Main: { screen: CTabs },
    Review: { screen: ReviewScreen },
    Reminder: { screen: ReminderScreen },
    FieldUpdate: { screen: FieldUpdateScreen }
});

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppNavigator  navigation={addNavigationHelpers({dispatch, state: nav})} />
);

AppWithNavigationState.PropTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
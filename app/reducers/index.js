import {
    combineReducers
} from 'redux';
import {
    NavigationActions
} from 'react-navigation';
import {
    AppNavigator
} from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams("Login");
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action){
    let nextState;

    switch(action.type){
        case 'Back':

            nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
            break;

        default:

            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}

var initialData = {
    listData: []
};

function list(state = initialData, action){
    switch(action.type){
        case 'addData':

            return {
                listData: [...state.listData, action.data]
            }
        default:
            return state;
    }
}


const AppReducer = combineReducers({
    nav,
    list,
});

export default AppReducer;

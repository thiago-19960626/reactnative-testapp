import { Colors } from '../../constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    header: {
        backgroundColor: Colors.navbar
    },

    headerTitle: {
        color: '#fff',
        letterSpacing: 1
    },

    headerBtnText: {
        color: '#fff'
    },

    listItem: {
        marginLeft: 0,
        borderBottomWidth: 0,
        paddingTop: 0
    },

    inputText: {
        height: 50,
        width: width,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 0
    }
}
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

    headerIconContainer: {
        flex: 0.3
    },

    headerBtnText: {
        color: '#fff'
    },

    listItem: {
        marginLeft: 0,
        paddingLeft: 10,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 20
    },

    listItemText: {
        fontSize: 15
    },

    timePickerControl: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    timePickerCancelBtnText: {
        color: 'rgba(0,0,0,0.6)'
    },

    timePickerDoneBtnText: {
        color: Colors.main
    }

};
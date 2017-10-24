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

    listItem: {
        backgroundColor: '#fff',
        marginLeft: 0,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1
    },

    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: (width / 2)
    },

    valueText: {
        marginRight: 10,
        fontSize: 18
    },

    valueIcon: {
        color: 'rgba(0,0,0,0.3)',
        fontSize: 20
    },

    divider: {
        height: 55
    }

}
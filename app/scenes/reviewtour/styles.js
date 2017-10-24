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

    content: {
        backgroundColor: '#fff'
    },

    body: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    wrapper: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },

    centerIcon: {
        fontSize: 90,
        color:  Colors.green,
        marginTop: 50,
        marginBottom: 30
    },

    welcomeText: {
        fontSize: 25,
        color: 'black',
        fontWeight: '600',
        textAlign: 'center'
    },

    welcomeDes: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.7)',
        textAlign: 'center',
        marginTop: 30
    },

    btnContainer: {
        marginTop: 30,
        width: 180
    },

    startBtn: {
        backgroundColor: Colors.green,
        borderRadius: 0,
        width: 180,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    startBtnText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    }
}
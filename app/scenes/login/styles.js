import { Colors } from '../../constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: Colors.main
    },

    body: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: (height - 70)
    },

    logo: {
        width: width / 2,
        height: (159 / 558) * (width / 2)
    },

    formItem: {
        marginTop: 20,
        marginLeft: 0
    },

    formInput: {
        width: (width - 80),
        backgroundColor: '#fff',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15
    },

    loginBtn: {
        height: 50,
        backgroundColor: Colors.yellow,
        width: (width - 80),
        marginLeft: 40,
        marginTop: 20,
        borderRadius: 0 
    },

    loginBtnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500'
    },

    forgotBtn: {
        height: 30,
        width: (width - 80),
        marginTop: 10,
        marginLeft: 40
    },

    forgotBtnText: {
        color: '#fff',
        fontSize: 15
    },

    footer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: 70
    },

    signupBtn: {
        height: 70,
        width: width
    },

    signupBtnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    }
}
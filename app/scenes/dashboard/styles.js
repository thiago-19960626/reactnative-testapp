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
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },

    wrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    topText: {
        color: Colors.second,
        fontSize: 20,
        fontWeight: '500',
        marginTop: 30,
        letterSpacing: 1,
        textAlign: 'center'
    },

    noreviewImg: {
        width: width / 2 * 1.1,
        height: width / 2 * 1.1,
        marginTop: 40,
        marginBottom: 40
    },

    divider: {
        height: 0.6,
        width: (width - 50),
        backgroundColor: 'rgba(0,0,0,0.3)'
    },

    textProgress: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20
    },

    reviewBtn: {
        borderRadius: 0,
        height: 70,
        backgroundColor: Colors.btnBackground,
        marginRight: 10
    },

    reviewBtnContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    reviewBtnText1: {
        color: Colors.second,
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 5
    },

    reviewBtnText2: {
        color: Colors.second,
        fontSize: 18,
        fontWeight: '800'
    },

    pointBtn: {
        borderRadius: 0,
        height: 70,
        backgroundColor: Colors.btnBackground,
        marginLeft: 10
    },

    pointBtnIcon: {
        fontSize: 14,
        color: Colors.second
    },

    centerBtnContainer: {
        width: width / 2.5,
        height: width / 2.5,
        marginTop: 40,
        marginBottom: 40
    },

    centerBtn: {
        width: width / 2.5,
        height: width / 2.5,
        backgroundColor: Colors.green,
        borderRadius: width / 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },

    centerBtnText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        lineHeight: (width / 4)
    },

    centerText: {
        color: Colors.navbar,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 30
    },

    centerGrid: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },

    centerGridBtn: {
        height: 30,
        backgroundColor: Colors.blue,
        marginRight: 10,
        marginBottom: 5
    },

    centerGridBtnText: {
        fontSize: 15,
        fontWeight: '700'
    }
}
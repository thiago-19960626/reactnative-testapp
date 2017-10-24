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

    headerIcon: {
        color: 'white',
        fontSize: 20
    },

    headerIconContainer: {
        width: 50,
        flex: 0.1
    },

    content: {
        backgroundColor: '#fff'
    },

    questionContainer: {
        margin: 20,
        borderTopColor: 'rgba(0,0,0,0.4)',
        borderTopWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        borderBottomWidth: 1,
        borderLeftColor: 'rgba(0,0,0,0.4)',
        borderLeftWidth: 1,
        borderRightColor: 'rgba(0,0,0,0.4)',
        borderRightWidth: 1,
        paddingLeft: 20,
        paddingRight: 20
    },

    questionText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 30,
        fontWeight: '500'
    },

    questionDes: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15
    },

    questionBlockContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },

    questionIcon: {
        fontSize: 17,
        color: 'rgba(0,0,0,0.7)'
    },

    answerBtnWrapper: {
        width: 170,
        height: 50
    },

    answerBtn: {
        backgroundColor: Colors.green,
        borderRadius: 0,
        height: 50,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center'
    },

    answerBtnText: {
        color: 'white',
        fontSize: 19
    },

    progressContainer: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    progressWrapper: {
        height: 30,
        width: (width - 40),
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        position: 'relative'
    },

    progressValue: {
        height: 28,
        backgroundColor: Colors.yellow
    },

    progressInt: {
        position: 'absolute',
        right: 10,
        top: 0,
        lineHeight: 28,
        fontSize: 16,
        color: 'rgba(0,0,0,0.7)'
    },

    footer: {
        backgroundColor: Colors.navbar
    },

    col: {
        justifyContent: 'center'
    },

    earnedText: {
        color: 'white',
        fontSize: 15,
        marginLeft: 20
    },

    earnedIcon: {
        fontSize: 23
    },

    earnedValue: {
        fontWeight: '700',
        color: 'white'
    },

    bonusTextContainer: {
        width: 130,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },

    bonusText: {
        fontSize: 14,
        color: Colors.navbar,
        fontWeight: '500'
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

    congText: {
        fontSize: 25,
        color: 'black',
        marginTop: 40,
        fontWeight: '600',
        textAlign: 'center'
    },

    noreviewImg: {
        width: width / 2.5,
        height: width / 2.5,
        marginTop: 20,
        marginBottom: 20
    },

    congDes: {
        fontSize: 18,
        color: 'black',
        marginBottom: 20,
        textAlign: 'center'
    },

    pointTextContainer: {
        backgroundColor: Colors.btnBackground,
        width: 170,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10
    },

    pointText1: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: '500'
    },

    pointText2: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: '700'
    },

    pointIcon: {
        color: 'black',
        fontSize: 19
    },

    goBtn: {
        backgroundColor: Colors.green,
        marginTop: 40,
        height: 60
    },

    goBtnText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600'
    }
}
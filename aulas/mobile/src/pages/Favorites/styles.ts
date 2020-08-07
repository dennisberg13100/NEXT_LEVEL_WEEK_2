import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f1',
    },
    teacherList: {
        marginTop: -40,
        paddingHorizontal: 16,
    },
    searchForm: {
        marginBottom: 24,

    }, 
    label:{
        color:'#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8, 
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    }, 
    inputGroup: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    inputBlock: {
        width: '48%',
    },
    submitButton:{
        backgroundColor: '#04d361',
        height: 56,
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitText:{
        color: '#fff',
        fontFamily: 'Archivo_700Bold', 
        fontSize: 16,
    }
});

export default styles;
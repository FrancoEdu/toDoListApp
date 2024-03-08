import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    homePage:{
        flex: 1,
    },
    containerTop: {
        height: '20%',
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    titleApp:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    toTitleApp:{
        color: '#4EA8DE',
        fontSize: 36,
        fontWeight: '900'
    },
    doTitleApp:{
        color: '#5E60CE'
    },
    containerBottom: {
        height: '80%',
        backgroundColor: '#1A1A1A',
        padding: 24,
    },
    form: {
        padding: 24,
        position: 'absolute',
        top: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },    
    inputData:{
        color: "#FDFCFE",
        backgroundColor: "#1F1E25",
        height: 56,
        borderRadius: 5,
        paddingLeft: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 10
    },
    button:{
        backgroundColor: "#1E6F9F",
        height: 56,
        width: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dataCounter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#1F1E25',
        paddingBottom: 20,
        marginBottom: 10
    },
    created:{
        fontWeight: '900',
        color: '#4EA8DE',
    },
    createdNumberContainer: {
        backgroundColor: "#333333",
        borderRadius: 30,
        paddingHorizontal: 8,
    },
    createdNumber: {
        color: '#FFF',
        fontWeight: '900',
    },
    finished:{
        fontWeight: '900',
        color: '#5E60CE'
    },
    flexDisplay: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
  });
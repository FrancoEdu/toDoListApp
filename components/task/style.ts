import { StyleSheet } from "react-native";

export const stylesTask = StyleSheet.create({
    taskForm:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        padding: 20,
        backgroundColor: '#262626',
        height: 70
    },
    radioButtonFree:{
        borderColor: "#4EA8DE",
        borderWidth: 1,
    },
    radioButtonChecked:{
        backgroundColor: '#8284FA'
    },
    radioButton:{
        height: 20,
        width: 20,
        borderRadius: 100
    },
    viewTaskDescription:{
        width: "80%",
    },
    taskDescription:{
        color: '#FFF',
        fontWeight: '600',
        fontSize: 12,
        textAlign: 'center',
    }
});
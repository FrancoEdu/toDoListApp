import { TouchableOpacity, View, Text, Image } from "react-native";
import { stylesTask } from "./style";

export function Task(){

    const checked: boolean = false;

    return(
        <View style={stylesTask.taskForm}>
            <TouchableOpacity style={[
                    stylesTask.radioButton, 
                    checked === false ? 
                    stylesTask.radioButtonFree : 
                    stylesTask.radioButtonChecked
                ]}
            ></TouchableOpacity>
            <View style={stylesTask.viewTaskDescription}>
                <Text style={stylesTask.taskDescription}>
                    Integer urna interdum massa libero auctor 
                    neque turpis turpis semper.
                </Text>
            </View>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/trash.png')}
                /> 
            </TouchableOpacity>
        </View>
    )
}
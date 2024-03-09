import { TouchableOpacity, View, Text, Image } from "react-native";
import { stylesTask } from "./style";
import { TaskModel } from "../../shared/task.model";

export function Task(props: TaskModel){
    return(
        <View style={stylesTask.taskForm}>
            <TouchableOpacity 
                style={[
                    stylesTask.radioButton, 
                    props.checked === false ? 
                    stylesTask.radioButtonFree : 
                    stylesTask.radioButtonChecked
                ]}
                onPress={props.onChecked}
            >
                {props.checked && (
                    <Image
                        source={require('../../assets/Vector.png')}
                    />
                )}
            </TouchableOpacity>
            <View style={stylesTask.viewTaskDescription}>
                <Text 
                    style={[
                        stylesTask.taskDescription,
                        props.checked === false ? 
                        stylesTask.taskDescription : 
                        stylesTask.textLineMiddle
                    ]}>
                    {props.data}
                </Text>
            </View>
            <TouchableOpacity
                disabled={!props.checked}
                onPress={props.onRemove}>
                <Image
                    source={require('../../assets/trash.png')}
                /> 
            </TouchableOpacity>
        </View>
    )
}
import { View, Image, Text, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import { styles } from "./style";
import { Task } from "../../components/task";

export function Home(){
    return(
        <View style={styles.homePage}>
            <View style={styles.containerTop}>
                <View style={styles.titleApp}>
                    <Image
                        source={require('../../assets/rocket.png')}
                    />
                    <Text style={styles.toTitleApp}>
                        to<Text style={styles.doTitleApp}>do</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.dataCounter}>
                    <View style={styles.flexDisplay}>
                        <Text style={styles.created}>Criadas</Text>
                        <View style={styles.createdNumberContainer}>
                            <Text style={styles.createdNumber}>0</Text>
                        </View>
                    </View>
                    <View style={styles.flexDisplay}>
                        <Text style={styles.finished}>Concluídas</Text>
                        <View style={styles.createdNumberContainer}>
                            <Text style={styles.createdNumber}>0</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Task></Task>
                </View>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.inputData}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                />
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../../assets/plus.png')}
                    /> 
                </TouchableOpacity>
            </View>
        </View>
    )
}
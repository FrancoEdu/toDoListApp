import { View, Image, Text, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { ITask } from "../../shared/task.model";
import { Guid } from "guid-ts";
import { Task } from "../../components/task";

export function Home(){

    const [taskInput, setTaskInput] = useState(""); // pegando valor do input e função de set dele
    const [tasks, setTasks] = useState<ITask[]>([]);

    
    function handleRemoveTask(id: string): void{
        Alert.alert(
            "Remover", 
            `Tem certeza que deseja remover o a tarefa?`,
            [{
                text: 'Sim',
                onPress: () => {
                    const updatedTasks = tasks.filter(x => x.id !== id);
                    setTasks(updatedTasks); 
                }          
            },{
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    
    function handleCheckedTask(id: string): void {
        const index = tasks.findIndex(x => x.id === id);
        if (index === -1) {
            Alert.alert("Opss...", "Não encontramos esse card selecionado, tente novamente mais tarde.");
            return;
        }
        const updatedTasks = [...tasks]; // Cria uma cópia do vetor de tarefas
        updatedTasks[index].checked = !updatedTasks[index].checked;
        setTasks(updatedTasks);
    }
    
    function handleAddNewTask(): void{
        if(taskInput == ""){
            Alert.alert("Entrada inválida", "É necessário adicionar conteúdo para ser incluso na lista de tarefas");
            return;
        }
        
        if(tasks.some(t => t.data === taskInput)){
            Alert.alert("Entrada inválida", "Aparentemente já existe uma tarefa na lista com essa info...");
            return;
        }
        
        const newData: ITask = {id: Guid.newGuid().toString(), data: taskInput, checked: false}
        setTaskInput("");
        setTasks([...tasks, newData]);
    }
    
    function updateTotalCreatedTasks(): number{
        return tasks.reduce((cont, obj) => {
            if(!obj.checked){
                return cont + 1;
            }
            return cont;
        }, 0);
    }
    
    function updateTotalFinishedTasks(): number{
        return tasks.reduce((cont, obj) => {
            if(obj.checked){
                return cont + 1;
            }
            return cont;
        }, 0);
    }
    
    const renderTask = ({item} : {item: ITask}) => (
        <Task
            data={item.data}
            id={item.id}
            checked={item.checked}
            onRemove={() => handleRemoveTask(item.id)}
            onChecked={() => handleCheckedTask(item.id)}
        >
        </Task>
    );

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
                        <Text style={styles.created}>Abertas</Text>
                        <View style={styles.createdNumberContainer}>
                            <Text style={styles.createdNumber}>
                                {updateTotalCreatedTasks()}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.flexDisplay}>
                        <Text style={styles.finished}>Concluídas</Text>
                        <View style={styles.createdNumberContainer}>
                            <Text style={styles.createdNumber}>
                                {updateTotalFinishedTasks()}
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <FlatList 
                        data={tasks}
                        renderItem={renderTask}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <View style={styles.viewListEmpty}>
                                <Image
                                    source={require('../../assets/Clipboard.png')}
                                />
                                <Text style={styles.listEmpty}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.listEmptyBottom}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        )}
                    />
                </View>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.inputData}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={x => setTaskInput(x)}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleAddNewTask}
                >
                    <Image
                        source={require('../../assets/plus.png')}
                    /> 
                </TouchableOpacity>
            </View>
        </View>
    )
}
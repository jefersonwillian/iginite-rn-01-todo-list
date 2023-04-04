import { useState } from "react";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    FlatList,
    Alert,
} from "react-native";
import { ToDoList } from "../components/to-do-list";
import { styles } from "./styles";
import { Image } from 'react-native';

type todoList = {
    id: string,
    isSelected: boolean,
    name: string;
}

export function Home() {
    const [newTodo, setNewTodo] = useState('');
    const [listTodo, setListTodo] = useState<todoList[]>([]);
    const logo = '../../../assets/logo.png';
    const iconeButton = '../../../assets/plus.png';
    const clipboard = '../../../assets/clipboard.png';

    function generateRandomId() {
        const randomId = Math.random().toString(16).substring(2, 10);
        return randomId;
    }

    function handleTodoAdd() {
        const newDate: todoList = {
            id: generateRandomId(),
            isSelected: false,
            name: newTodo
        }
        setListTodo((oldState) => [...oldState, newDate]);
        setNewTodo('');
    }

    function handleTodoRemove(id: string) {
        Alert.alert("Remover", `Deseja remover esse item?`, [
            {
                text: "Sim",
                onPress: () => {
                    setListTodo(prevState => prevState.filter(
                        Todo => Todo.id !== id
                    ))
                },
            },
            {
                text: "Não",
                style: "cancel",
            },
        ]);
    }
    
    function handleCompleteTask(item: todoList) {
        setListTodo(
            listTodo.map((itemTodo) =>
                itemTodo.id === item.id ? { ...itemTodo, isSelected: !itemTodo.isSelected } : itemTodo
            )
        );       
    }

    function selectedItemsCount() {
        return listTodo.filter(item => item.isSelected).length;
    }


    return (
        <>
            <View style={styles.containerOne}>
                <View style={styles.containerLogo}>
                    <Image source={require(logo)} />
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#6b6b6b"
                        onChangeText={setNewTodo}
                        value={newTodo}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.5}
                        onPress={() => handleTodoAdd()}
                        disabled={!newTodo}
                    >
                        <Image source={require(iconeButton)} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerTwo}>
                <View style={styles.boxData}>
                    <View style={styles.lineData}>
                        <Text style={styles.maidsText}>Criadas</Text>
                        <View style={styles.circle}>
                            <Text style={styles.numberResult}>{listTodo.length}</Text>

                        </View>
                    </View>
                    <View style={styles.lineData}>
                        <Text style={styles.completedText}>Concluídas</Text>
                        <View style={styles.circle}>
                            <Text style={styles.numberResult}>{selectedItemsCount()}</Text>

                        </View>
                    </View>
                </View>
                <FlatList
                    data={listTodo}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ToDoList
                            key={item.id}
                            name={item.name}
                            isSelected={item.isSelected}
                            onRemove={() => handleTodoRemove(item.id)}
                            onPress={() => handleCompleteTask(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <>
                            <View style={styles.iconCliboard}>
                                <Image source={require(clipboard)} />
                            </View>
                            <Text style={styles.listEmptyTextBold}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.listEmptyText}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </>
                    )}
                />
            </View>
        </>
    );
}

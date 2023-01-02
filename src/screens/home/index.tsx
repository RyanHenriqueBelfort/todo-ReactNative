import React, { useState } from "react";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";

import rocket from "../../../assets/rocket.png";
import plus from "../../../assets/plus.png";
import clipboard from "../../../assets/Clipboard.png";
import { Tasks } from "../../components/Tasks";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskNewCount, setTaskNewCount] = useState(0);
  const [taskCompletedCount, setTaskCompletedCount] = useState(0);
  
  const [focus, setFocus] = useState(false);
  const customStyles = focus ? styles.textInputFocus : styles.input;

  function handleTaskAdd() {
    if (taskName === "") {
      return;
    }
    setTaskCompletedCount(taskCompletedCount + 1)
    setTasks((prevState) => [...prevState, taskName]);
    setTaskName("");
    setTaskNewCount(tasks.length + 1);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover Task", `Deseja remover essa tarefa ${name}?`, [
      {
        text: "Sim",
        onPress: () => removerParticipant(name),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function removerParticipant(name: string) {
    setTasks(tasks.filter((item) => item !== name));
    setTaskNewCount(tasks.length - 1);
    if(taskCompletedCount > 0) {
      setTaskCompletedCount(taskCompletedCount - 1)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Image source={rocket} />
        <Text style={styles.textLogo1}>to</Text>
        <Text style={styles.textLogo2}>do</Text>
      </View>
      <View style={styles.task}>
        <View style={styles.form}>
          <TextInput
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setTaskName}
            style={customStyles}
            value={taskName}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Image source={plus} />
          </TouchableOpacity>
        </View>
        <View style={styles.countTask}>
          <View style={styles.infoTask}>
            <Text style={styles.textNew}>Criadas</Text>
            <Text style={styles.countTextTask}>{taskNewCount}</Text>
          </View>
          <View style={styles.infoTask}>
            <Text style={styles.textComplete}>Concluídas</Text>
            <Text style={styles.countTextTask}>{taskCompletedCount}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Tasks
              key={item}
              task={item}
              onRemove={() => handleParticipantRemove(item)}
              setTaskCompletedCount={setTaskCompletedCount}
              taskCompletedCount={taskCompletedCount}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.tasks}>
              <View style={styles.emptyTask}>
                <Image source={clipboard} />
                <Text style={styles.emptyTextTask}>
                  <Text style={styles.textBold}>
                    Você ainda não tem tarefas cadastradas{" "}
                  </Text>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}

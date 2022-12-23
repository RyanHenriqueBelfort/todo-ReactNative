import { useState } from 'react'

import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import rocket from "../../../assets/rocket.png";
import plus from "../../../assets/plus.png";
import clipboard from "../../../assets/Clipboard.png";

export default function Home() {
  const [focus, setFocus] = useState(false)
  const customStyles = focus ? styles.textInputFocus : styles.input

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
            style={customStyles}
          />
          <TouchableOpacity style={styles.button}>
            <Image source={plus} />
          </TouchableOpacity>
        </View>
        <View style={styles.countTask}>
          <View style={styles.infoTask}>
            <Text style={styles.textNew}>Criadas</Text>
            <Text style={styles.countTextTask}>0</Text>
          </View>
          <View style={styles.infoTask}>
            <Text style={styles.textComplete}>Concluídas</Text>
            <Text style={styles.countTextTask}>0</Text>
          </View>
        </View>
        <View style={styles.tasks}>
          <View style={styles.emptyTask}>
            <Image source={clipboard} />
            <Text style={styles.emptyTextTask}>
              <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas </Text>
              Crie tarefas e organize
              seus itens a fazer
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

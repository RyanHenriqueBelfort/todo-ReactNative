import { useEffect, useState } from 'react'

import { View, Text, Image, TouchableOpacity, Alert} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import trash from '../../../assets/trash.png';
import { styles } from './styles';

interface TaskProps {
task: string
onRemove: (checK: boolean) => void
setTaskCompletedCount: React.Dispatch<React.SetStateAction<number>>
taskCompletedCount: number
}

export function Tasks({task, onRemove, setTaskCompletedCount, taskCompletedCount}: TaskProps) {
    const [check, setCheck] = useState(false)

    function handleTask(){
      setCheck(!check)
    }

    useEffect(() => {
      if(check) {
        setTaskCompletedCount(taskCompletedCount + 1)
      }
      if(!check && taskCompletedCount > 0) {
        setTaskCompletedCount(taskCompletedCount - 1)
      }
    }, [check])

    console.log(taskCompletedCount)
  return (
    <View style={check ? [styles.content, {borderWidth: 0}] : styles.content }>
      <BouncyCheckbox
        size={25}
        fillColor={check ? "#5E60CE" : "#4EA8DE"}
        unfillColor="#1A1A1A"
        textStyle={{color: '#F2F2F2', fontWeight: '400', fontSize: 14, lineHeight: 20}}
        text={task}
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={check}
        style={{
          maxWidth: '80%'
        }}
        onPress={handleTask}
      />
      <TouchableOpacity onPress={() => onRemove(check)}>
        <Image source={trash} style={styles.image}/>
      </TouchableOpacity>
    </View>
  );
}
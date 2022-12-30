import { useState } from 'react'

import { View, Text, Image, TouchableOpacity} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import trash from '../../../assets/trash.png';
import { styles } from './styles';

export function Tasks() {
    const [check, setCheck] = useState(false)

    console.log(check)
  return (
    <View style={check ? [styles.content, {borderWidth: 0}] : styles.content }>
      <BouncyCheckbox
        size={25}
        fillColor={check ? "#5E60CE" : "#4EA8DE"}
        unfillColor="#1A1A1A"
        textStyle={{color: '#F2F2F2', fontWeight: '400', fontSize: 14, lineHeight: 20}}
        text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={check}
        style={{
          maxWidth: '80%'
        }}
        onPress={() => setCheck(!check)}
      />
      <TouchableOpacity>
        <Image source={trash} style={styles.image}/>
      </TouchableOpacity>
    </View>
  );
}

import React, { FC, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export interface AddInputProps {
  onAdd: (label: string) => void;
}

export const AddInput: FC<AddInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setInput}
        placeholder="Add a new todo item here"
        placeholderTextColor="#000"
        value={input}
        style={styles.textInput}
      />
      <Button
        title='Submit'
        onPress={
          () => {
            onAdd(input);
            setInput('')
          }
        }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '100%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 2,
    width: 300
  }
});

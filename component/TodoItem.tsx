import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export interface TodoItemProps {
  id: string;
  label: string;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  id,
  label,
  isChecked = false,
  onChange,
}) => {
  return (
    <View style={styles.container} key={id}>
      {isChecked ? <Text>☑</Text>: <Text>☐</Text>}
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
});

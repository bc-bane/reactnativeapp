import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from 'moment';

export interface TodoItemProps {
  id: string;
  label: string;
  isChecked?: boolean;
  onPress?: () => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  id,
  label,
  isChecked = false,
  onPress,
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

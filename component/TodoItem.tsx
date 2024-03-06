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
      {
        isChecked ? 
          <Text style={styles.checkboxChecked}>☑</Text> : 
          <Text style={styles.checkboxUnchecked}>☐</Text>
      }
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxUnchecked: {
    fontSize: 20,
  },
  checkboxChecked: {
    fontSize: 16,
  },
  label: {
    paddingLeft: 8,
  }
});

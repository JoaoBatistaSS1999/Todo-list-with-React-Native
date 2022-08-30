import { Pressable, StyleSheet, Text, View } from "react-native";

const TaskItem = ({ text, onPress, id }) => {
  return (
    <Pressable onPress={onPress.bind(this, id)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    width: 300,
    margin: 8,
    padding: 8,
    borderRadius: 6,
    borderColor: "#ffffff",
    backgroundColor: "#464646",
    borderWidth: 1,
  },
  taskText: {
    color: "#ffffff",
  },
});

export default TaskItem;

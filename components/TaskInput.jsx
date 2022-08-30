import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
const TaskIcon = require("../assets/target.png");

const TaskInput = ({ onAddTask, visible, onCancel }) => {
  const [input, setInput] = useState("");

  const inputHandler = (value) => {
    setInput(value);
  };

  const addTaskItem = () => {
    onAddTask(input);
    setInput("");
  };
  const closeModalHandler = () => {
    setInput("");
    onCancel();
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={TaskIcon} />
        <TextInput
          value={input}
          placeholder='Create new task'
          onChangeText={inputHandler}
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='cancel' onPress={closeModalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='add' onPress={addTaskItem} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#000000",
    padding: 16,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },

  icon: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
});

export default TaskInput;

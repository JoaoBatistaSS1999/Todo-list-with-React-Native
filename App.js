import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTask = (value) => {
    if (value.trim() === "") {
      alert("You cannot add a empty value");
      return;
    }

    setTaskList((prevState) => [
      ...prevState,
      { text: value, id: Math.random().toString() },
    ]);
    closeModal();
  };

  const deleteHandler = (e) => {
    setTaskList((prevState) => {
      return prevState.filter((item) => item.id !== e);
    });
    console.log("deleted");
  };

  return (
    <View style={styles.appContainer}>
      <Button title='add task' onPress={openModal} />
      <TaskInput
        onAddTask={addTask}
        onCancel={closeModal}
        visible={isModalOpen}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={taskList}
          renderItem={(itemData) => {
            return (
              <TaskItem
                text={itemData.item.text}
                id={itemData.item.id}
                onPress={deleteHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#000000",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#000000",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 5,
    padding: 10,
    width: "100%",
  },
});

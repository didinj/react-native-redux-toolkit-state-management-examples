import React, { useState } from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addTodo, deleteTodo, toggleTodo } from "../../features/todoSlice";

export default function TodosScreen() {
  const [text, setText] = useState("");
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, marginBottom: 10 }}>Todo List</Text>

      {/* Input for new todo */}
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Enter a todo"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            marginRight: 10,
            borderRadius: 5
          }}
        />
        <Button
          title="Add"
          onPress={() => {
            if (text.trim()) {
              dispatch(addTodo(text));
              setText("");
            }
          }}
        />
      </View>

      {/* Todo list */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => dispatch(toggleTodo(item.id))}
            >
              <Text
                style={{
                  fontSize: 18,
                  textDecorationLine: item.completed ? "line-through" : "none"
                }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
            <Button
              title="Delete"
              onPress={() => dispatch(deleteTodo(item.id))}
            />
          </View>
        )}
      />
    </View>
  );
}

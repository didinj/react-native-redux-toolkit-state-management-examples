import { Button, Text, View } from "react-native";

import {
  decrement,
  increment,
  incrementByAmount,
  reset
} from "@/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

export default function HomeScreen() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
      <Button
        title="Increment by 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </View>
  );
}

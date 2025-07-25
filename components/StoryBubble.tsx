import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const StoryBubble = () => {
  return (
    <TouchableOpacity onPress={() => router.push("/story")}>
      <View
        style={{
          padding: 50,
          backgroundColor: "black",
          borderRadius: 100,
          marginRight: 10,
        }}
      ></View>
    </TouchableOpacity>
  );
};

export default StoryBubble;

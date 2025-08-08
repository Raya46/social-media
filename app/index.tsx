import { router } from "expo-router";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Page = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const usernamePlaceholder = "el";
  const passwordPlaceholder = "el123";

  const handleLogin = () => {
    if (username === usernamePlaceholder && password === passwordPlaceholder) {
      router.push("/home");
    } else {
      console.warn("invalid");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Text>Username</Text>
      <TextInput
        onChangeText={(text) => setusername(text)}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
      />
      <Text>Password</Text>
      <TextInput
        onChangeText={(text) => setpassword(text)}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
      />
      <Button onPress={handleLogin} title="login" />
      <Button
        onPress={() => router.push("/auth/register")}
        title="go to register"
      />
    </View>
  );
};

export default Page;

import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Page = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
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
      <Text>{username}</Text>
      <Text>{password}</Text>
      <Button onPress={() => console.log("t")} title="login" />
    </View>
  );
};

export default Page;

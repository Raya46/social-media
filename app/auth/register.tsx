import { useRegister } from "@/hooks/useUser";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Register = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const { mutate: register } = useRegister();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register</Text>
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
      <Text>Email</Text>
      <TextInput
        onChangeText={(text) => setemail(text)}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
      />
      
      <Button
        onPress={() =>
          register({
            email: email,
            password: password,
            username: username,
          })
        }
        title="register"
      />
    </View>
  );
};

export default Register;

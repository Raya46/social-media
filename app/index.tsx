import { useLogin } from "@/hooks/useUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

const Page = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { mutate: login, isPending } = useLogin();

  const handleUserLoggedIn = async () => {
    const userToken = await AsyncStorage.getItem("token");
    if (userToken) {
      router.replace("/home");
    }
  };

  const handleLogin = () => {
    try {
      console.log(email, password);
      login({
        email: email,
        password: password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleUserLoggedIn();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Text>email</Text>
      <TextInput
        onChangeText={(text) => setemail(text)}
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
      {isPending ? (
        <ActivityIndicator />
      ) : (
        <Button onPress={handleLogin} title="login" />
      )}
      <Button
        onPress={() => router.push("/auth/register")}
        title="go to register"
      />
    </View>
  );
};

export default Page;

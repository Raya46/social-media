import { createPost } from "@/hooks/usePost";
import React, { useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

const Post = () => {
  const [caption, setcaption] = useState("")
  const [imageUrl, setimageUrl] = useState("")
  const {mutate:handleCreatePost, isPending} = createPost()
  
  return (
    <View style={{
      marginHorizontal:20
    }}>
      <Text>Caption</Text>
      <TextInput style={{
        borderColor:"black",
        width:"100%",
        height:50,
        borderWidth:1
      }}
      onChangeText={(text) => setcaption(text)}
      />
      <Text>Image Url</Text>
      <TextInput style={{
        borderColor:"black",
        width:"100%",
        height:50,
        borderWidth:1
      }}
      onChangeText={(text) => setimageUrl(text)}
      />
      {isPending ? <ActivityIndicator/> : <Button title="create" onPress={() => handleCreatePost({
        caption:caption,
        imageUrl:imageUrl
      })} />}
      
    </View>
  );
};

export default Post;

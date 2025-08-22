import { router, useLocalSearchParams } from "expo-router"
import React, { useState } from 'react'
import { ActivityIndicator, Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { updatePost } from "../../hooks/usePost"

const EditPost = () => {
    const params = useLocalSearchParams()
    const [caption, setcaption] = useState(params.caption)
    const [imageUrl, setimageUrl] = useState(params.imageUrl)
    const {mutate:handleUpdatePost,isPending} = updatePost()
  return (
    <View>
       <TouchableOpacity onPress={() => router.back()}>
        <Text>{"<"}Back </Text>
       </TouchableOpacity>
      <Text>Caption</Text>
      <TextInput style={{
        borderColor:"black",
        width:"100%",
        height:50,
        borderWidth:1,
      }}
     value={caption as string}
      onChangeText={(text) => setcaption(text)}
      />
      <Text>Image Url</Text>
      <TextInput style={{
        borderColor:"black",
        width:"100%",
        height:50,
        borderWidth:1
      }}
      value={imageUrl as string}
      onChangeText={(text) => setimageUrl(text)}
      />
      {isPending ? <ActivityIndicator/> : <Button title="edit" onPress={() => handleUpdatePost({
        id:params.id as string,
        caption:caption as string,
        imageUrl:imageUrl as string,
      })} />}
    </View>
  )
}

export default EditPost
import { deletePost, getPostUser } from "@/hooks/usePost";
import { router } from "expo-router";
import React from "react";
import { Button, ScrollView, Text, View } from "react-native";

const Profile = () => {
  const {data,isPending} = getPostUser()
  const {mutate:handleDeletePost, isPending: isPendingDelete} = deletePost()
  return (
    <ScrollView>
      <Text>Profile</Text>
      <View style={{flexWrap:"wrap",gap:10}}>
        {data?.map((item,index) => (
          <View key={index} style={{padding:10,borderWidth:1, borderRadius:10, flexDirection:"column", gap:10}}>
            <Text>caption: {item.caption}</Text>
            <Text>image: {item.image_url}</Text>
            <View style={{flexDirection:"row", gap:10}}>
              <Button title="edit" onPress={() => router.push({pathname:"/edit-post", params:{id:item.id,caption:item.caption,imageUrl:item.image_url}})} />
              <Button title="delete" onPress={() => handleDeletePost({
                id:item.id
              })} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;

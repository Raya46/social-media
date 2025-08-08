import PostCard from "@/components/PostCard";
import StoryBubble from "@/components/StoryBubble";
import { useLogout } from "@/hooks/useUser";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const Home = () => {
  const { mutate: logout, isPending } = useLogout();
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <Text style={{ fontSize: 20 }}>INSTAGRAM</Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Ionicons name="heart" size={30} />
          {isPending ? (
            <ActivityIndicator />
          ) : (
            <Ionicons onPress={() => logout()} name="paper-plane" size={30} />
          )}
        </View>
      </View>

      <ScrollView
        horizontal={true}
        style={{ marginTop: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        <StoryBubble />
      </ScrollView>

      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </ScrollView>
  );
};

export default Home;

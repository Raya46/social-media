import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Home = () => {
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
          <Ionicons name="paper-plane" size={30} />
        </View>
      </View>

      <ScrollView
        horizontal={true}
        style={{ marginTop: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            padding: 50,
            backgroundColor: "black",
            borderRadius: 100,
            marginRight: 10,
          }}
        ></View>
        <View
          style={{
            padding: 50,
            backgroundColor: "black",
            borderRadius: 100,
            marginRight: 10,
          }}
        ></View>
        <View
          style={{
            padding: 50,
            backgroundColor: "black",
            borderRadius: 100,
            marginRight: 10,
          }}
        ></View>
        <View
          style={{
            padding: 50,
            backgroundColor: "black",
            borderRadius: 100,
            marginRight: 10,
          }}
        ></View>
        <View
          style={{
            padding: 50,
            backgroundColor: "black",
            borderRadius: 100,
            marginRight: 10,
          }}
        ></View>
        <View
          style={{
            padding: 50,
            backgroundColor: "black",
            borderRadius: 100,
            marginRight: 10,
          }}
        ></View>
      </ScrollView>

      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 100,
                padding: 30,
                backgroundColor: "black",
              }}
            ></View>
            <Text>username</Text>
          </View>
          <Ionicons
            name="ellipsis-horizontal"
            size={30}
            style={{ marginTop: 23 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "grey",
            width: "100%",
            height: 300,
            marginTop: 10,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <Ionicons name="heart-outline" size={30} />
            <Ionicons name="chatbubble-outline" size={30} />
            <Ionicons name="paper-plane-outline" size={30} />
          </View>
          <Ionicons name="bookmark-outline" size={30} />
        </View>
        <Text style={{ marginTop: 10, marginHorizontal: 8 }}>Liked by you</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 3,
            marginHorizontal: 8,
          }}
        >
          <Text>
            <Text style={{ fontWeight: "bold" }}>user</Text> Loremdasdasdsa
            dsadsadadas ipsum dolor sit amet
            jdkalsdjaksdjaslkdjaskdljsadkljsadklsajdklasjdklasjdlk
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("pres")}
          style={{ marginHorizontal: 8 }}
        >
          <Text style={{ color: "grey", fontSize: 18 }}>View all comments</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

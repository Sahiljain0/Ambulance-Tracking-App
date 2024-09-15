import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function () {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#1B2456",  flexDirection: "row", alignItems: "center", gap: 10, paddingTop: 35}}>
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            style={{
              fontSize: 30,
              color: "white",
              marginLeft: 30,
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize:25, fontWeight: 600, color: "white"}}>Edit Profile</Text>
      </View>
      <View style={{ flex: 8, alignItems: "center", backgroundColor: "#F2F2F2" }}>
        <Image style={{width: 150, height: 150, borderWidth: 2, borderColor: "#1B2456", borderRadius: 500, top: 20,}}/>
        <Text style={{fontSize: 20, fontWeight: 600, marginTop: 25}} >Say A Little Your Self</Text>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 50, marginRight: 50, marginTop: 30}}>
          <Ionicons name="person" size={25} style={{backgroundColor: "#FEFEFE", padding: 20}} />
          <TextInput
            placeholder="Full Name"
            style={{
              borderWidth: 1,
              borderColor: "#FAF9F5",
              backgroundColor: "#FAF9F5",
              paddingHorizontal: 20,
              paddingVertical: 18,
              borderRadius: 1,
              width: "80%",
              fontSize: 18,
              
            }}
          />
        </View>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 50, marginRight: 50, marginTop: 20}}>
          <Ionicons name="mail" size={25} style={{backgroundColor: "#FEFEFE", padding: 20}} />
          <TextInput
            placeholder="Email"
            style={{
              borderWidth: 1,
              borderColor: "#FAF9F5",
              backgroundColor: "#FAF9F5",
              paddingHorizontal: 20,
              paddingVertical: 18,
              borderRadius: 1,
              width: "80%",
              fontSize: 18,
              
            }}
          />
        </View>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 50, marginRight: 50, marginTop: 20}}>
          <FontAwesome6 name="phone" size={25} style={{backgroundColor: "#FEFEFE", padding: 20}} />
          <TextInput
            placeholder="Mobile Number"
            keyboardType="numeric"
            style={{
              borderWidth: 1,
              borderColor: "#FAF9F5",
              backgroundColor: "#FAF9F5",
              paddingHorizontal: 20,
              paddingVertical: 18,
              borderRadius: 1,
              width: "80%",
              fontSize: 18,
              
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#1B2456",
            width: "80%",
            paddingVertical: 15,
            marginTop: 220,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Add
          </Text>
        </TouchableOpacity>
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

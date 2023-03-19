import { View, Text, Image, TextInput } from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({onSearch}) => {
  return (
    // logo
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        {/* profile */}
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          {/* tik */}
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello,Cancancan 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            margin: SIZES.base / 2,
          }}
        >
          Let's find a masterpice
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width:"100%",
          borderRadius:SIZES.font,
          backgroundColor:COLORS.gray,
          alignItems:"center",
          flexDirection:"row",
          paddingHorizontal:SIZES.font,
          paddingVertical:SIZES.small
        }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

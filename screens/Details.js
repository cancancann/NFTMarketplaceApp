import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from "react-native";

import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  SubInfo,
  DetailsDesc,
  DetailsBid,
} from "../components";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 373,
      }}
    >
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={10}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton
        imgUrl={assets.heart}
        handlePress={() => navigation.goBack()}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        background="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;

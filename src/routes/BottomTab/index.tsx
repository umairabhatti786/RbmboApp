import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../../components/Text";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import HomeScreen from "../../screens/Main/Home";
import SearchScreen from "../../screens/Main/Search";
import { fonts } from "../../utils/Themes/fonts";
import { icons } from "../../assets/icons";
import LinearGradient from "react-native-linear-gradient";
import ChatScreen from "../../screens/Main/Chat";
import { useTranslation } from "react-i18next";

import "../../i18n/i18n"; // make sure i18n is loaded
import LikedScreen from "../../screens/Main/Liked";
import BoxScreen from "../../screens/Main/Box";

const BottomTab = ({ navigation }: any) => {
  const { t, i18n } = useTranslation();

  const Bottom = createBottomTabNavigator();
  const TabItem = ({ focused, title, img }: any) => {
    return (
      <LinearGradient
        colors={
          focused ? ["#48A0D7", "#6EC8D3", "#984A8B"] : ["#ffff", "#ffff"]
        }
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          ...style.itemStyle,
          width: focused ? sizeHelper.calWp(160) : 40,
        }}
      >
        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            tintColor: focused ? theme.colors.white : theme.colors.dark_gray,
          }}
        />
        {focused && (
          <CustomText
            text={title}
            fontFam={fonts.DMSans_SemiBold}
            fontWeight="600"
            size={20}
            color={theme.colors.white}
          />
        )}
      </LinearGradient>
    );
  };

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        animationEnabled: false,
        gestureEnabled: true,
        keyboardHidesTabBar: true,

        cardStyleInterpolator: ({ current, next, layouts }: any) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          position: "absolute",
          alignItems: "center",
          marginHorizontal: sizeHelper.calWp(30),
          marginBottom: sizeHelper.calHp(50),
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 1,
          shadowColor: theme.colors.black + "50",
          shadowRadius: 8,
          elevation: 10,
          height: sizeHelper.calHp(95),
          borderTopWidth: -1,
          borderRadius: 999,
          paddingHorizontal: sizeHelper.calWp(30),
        },

        headerShown: false,
      })}
    >
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                title={t("home_bottom_tab")}
                colors={theme.colors}
                img={focused ? icons.home : icons.home}
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="liked"
        component={LikedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={theme.colors}
                title={t("liked_bottom_tab")}
                img={icons.heart}
                focused={focused}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <LinearGradient
                colors={["#984A8B", "#48A0D7", "#6EC8D3"]} // Adjust colors to your needs
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  position: "absolute",
                  top: sizeHelper.calHp(Platform.OS == "ios" ? -50 : -60),
                  height: sizeHelper.calHp(90),
                  width: sizeHelper.calHp(90),
                  borderRadius: sizeHelper.calWp(90),
                  alignItems: "center",
                  justifyContent: "center",
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 8,
                  shadowColor: theme.colors.black + "50",
                  shadowRadius: 5,
                  elevation: 5,
                  // paddingLeft:20
                }}
              >
                <TouchableOpacity
                  style={{
                    height: sizeHelper.calHp(80),
                    width: sizeHelper.calHp(80),
                    borderRadius: sizeHelper.calWp(80),
                    backgroundColor: theme.colors.white,
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    // marginLeft:100
                  }}
                >
                  <Image
                    source={icons.add}
                    style={{
                      width: sizeHelper.calWp(40),
                      height: sizeHelper.calWp(40),
                    }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            );
          },
        }}
      />
      <Bottom.Screen
        name="boxScreen"
        component={BoxScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={theme.colors}
                title={t("box_bottom_tab")}
                img={icons.box}
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={theme.colors}
                title={t("chat_bottom_tab")}
                img={icons.chat}
                focused={focused}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    height: sizeHelper.calHp(80),
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    gap: sizeHelper.calHp(10),
    flexDirection: "row",
    borderRadius: 999,
    marginTop: sizeHelper.calHp(35),
  },
  img: {
    height: sizeHelper.calHp(30),
    width: sizeHelper.calHp(30),
  },
  tabBarStyle: {},
});

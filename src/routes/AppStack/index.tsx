import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../../screens/Auth/Onboarding";
import { AppStackParamList } from "../../utils/Types";
import LoginAndSignupScreen from "../../screens/Auth/LoginAndSignup";
import LoginScreen from "../../screens/Auth/Login";
import SignupScreen from "../../screens/Auth/Signup";
import BottomTab from "../BottomTab";

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"Onboarding"} component={OnboardingScreen} />
      <Stack.Screen name={"LoginAndSignup"} component={LoginAndSignupScreen} />
      <Stack.Screen name={"Login"} component={LoginScreen} />
      <Stack.Screen name={"Signup"} component={SignupScreen} />
      <Stack.Screen name={"BottomTab"} component={BottomTab} />

    </Stack.Navigator>
  );
};
export default AppStack;

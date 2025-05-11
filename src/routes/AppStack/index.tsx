import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../utils/Types";

import BottomTab from "../BottomTab";

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"BottomTab"} component={BottomTab} />
    </Stack.Navigator>
  );
};
export default AppStack;

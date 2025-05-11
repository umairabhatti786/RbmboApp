import React from "react";
import { Text, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";

const GradientText = ({ style, children, ...rest }: any) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[styles.text, style]} {...rest}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={["#48A0D7", "#6EC8D3", "#984A8B"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text style={[styles.text, style, { opacity: 0 }]} {...rest}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizeHelper.calHp(30),
    fontWeight: "bold",
    fontFamily: fonts.DMSans_Bold,
  },
  gradient: {
    flex: 1,
  },
});

export default GradientText;

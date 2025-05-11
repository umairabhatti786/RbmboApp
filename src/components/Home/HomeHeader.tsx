import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  ImageBackground,
} from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../utils/Helpers";
import { appStyles } from "../../utils/GlobalStyles";
import LinearGradient from "react-native-linear-gradient";
import { icons } from "../../assets/icons";
import { fonts } from "../../utils/Themes/fonts";
import { useTranslation } from "react-i18next";
import CustomText from "../Text";

import "../../i18n/i18n"; // make sure i18n is loaded

const HomeHeader = ({ item }: any) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <View
        style={{
          ...appStyles.rowjustify,
          paddingHorizontal: sizeHelper.calWp(50),
        }}
      >
        <LinearGradient
          colors={["#FFE7FB", "#D2FAFF"]} // Adjust colors to your needs
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.backContainer}
        >
          <Image
            style={{ width: "50%", height: "50%", resizeMode: "contain" }}
            source={icons.back_arrow}
          />
        </LinearGradient>
        <View style={{ flex: 1, alignItems: "center" }}>
          <CustomText
            text={t("home_header")}
            fontWeight="600"
            fontFam={fonts.DMSans_Medium}
            size={23}
          />
        </View>
        <View style={{ width: 50 }} />
      </View>
    </>
  );
};
export default HomeHeader;

const styles = StyleSheet.create({
  backContainer: {
    height: sizeHelper.calHp(70),
    width: sizeHelper.calHp(70),
    borderRadius: sizeHelper.calWp(70),
    backgroundColor: "#B7EFC5",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

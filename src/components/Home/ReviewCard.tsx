import { Image, StyleSheet, View } from "react-native";
import sizeHelper, { screenWidth } from "../../utils/Helpers";
import { appStyles } from "../../utils/GlobalStyles";
import { useTranslation } from "react-i18next";
import CustomText from "../Text";

import "../../i18n/i18n"; // make sure i18n is loaded
import { theme } from "../../utils/Themes";
import { icons } from "../../assets/icons";

const ReviewCard = ({ title, des, disableDivider }: any) => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.Card}>
      <View style={appStyles.rowjustify}>
        <CustomText
          text={t("review_title")}
          color={theme.colors.black + "70"}
          size={23}
        />

        <View
          style={{
            ...appStyles.row,
            gap: sizeHelper.calWp(7),
          }}
        >
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <Image
                key={index.toString()}
                source={icons.star}
                style={{
                  width: sizeHelper.calWp(27),
                  height: sizeHelper.calWp(27),
                }}
              />
            );
          })}
        </View>
      </View>
      <CustomText
        text={t("review_des")}
        color={theme.colors.black + "50"}
        size={22}
      />
    </View>
  );
};
export default ReviewCard;

const styles = StyleSheet.create({
  Card: {
    padding: sizeHelper.calWp(30),
    backgroundColor: theme.colors.white,
    gap: sizeHelper.calHp(20),
    borderRadius: sizeHelper.calHp(20),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 3,
    shadowColor: theme.colors.black + "50",
    shadowRadius: 4,
    elevation: 5,
  },
});

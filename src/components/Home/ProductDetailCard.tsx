import {
    StyleSheet,
    View,
  } from "react-native";
  import sizeHelper, { screenWidth } from "../../utils/Helpers";
  import { appStyles } from "../../utils/GlobalStyles";
  import { useTranslation } from "react-i18next";
  import CustomText from "../Text";
  
  import "../../i18n/i18n"; // make sure i18n is loaded
import { theme } from "../../utils/Themes";
  
  const ProductDetailCard = ({ title, des, disableDivider }: any) => {
    const { t, i18n } = useTranslation();
    return (
        <View
        style={{
          gap: sizeHelper.calHp(10),
        }}
      >
        <View
          style={{ ...appStyles.rowjustify, padding: sizeHelper.calWp(10) }}
        >
          <CustomText text={title} size={22} />

          <CustomText text={des} size={22} />
        </View>
        {!disableDivider && <View style={styles.divider} />}
      </View>
    );
  };
  export default ProductDetailCard;
  
  const styles = StyleSheet.create({
   
    divider: {
        width: "100%",
        height: sizeHelper.calHp(1),
        backgroundColor: theme.colors.black + "20",
      },
  });
  
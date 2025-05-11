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
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import CustomText from "../Text";
import { appStyles } from "../../utils/GlobalStyles";
import { icons } from "../../assets/icons";
import LinearGradient from "react-native-linear-gradient";
import GradientText from "../GradientText";

const CarouselProductCard = ({ item }: any) => {
  return (
    <>
      <View
        style={[
          {
            ...styles.Container,
          },
        ]}
      >
        <View
          style={{
            borderBottomRightRadius: sizeHelper.calWp(20),
            borderBottomLeftRadius: sizeHelper.calWp(20),
            borderTopRightRadius: sizeHelper.calWp(20),
            borderTopLeftRadius: sizeHelper.calWp(20),
            overflow: "hidden",
          }}
        >
          <ImageBackground
            source={item?.img}
            // resizeMode="contain"
            style={{
              width: "100%",
              height: sizeHelper.calHp(160),
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                padding: sizeHelper.calWp(20),
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  alignSelf: "flex-end",
                  gap: sizeHelper.calHp(20),
                }}
              >
                <TouchableOpacity
                  // onPress={() => setisFavourite(!isFavourite)}
                  style={styles.box}
                >
                  <Image
                    style={{
                      width: "50%",
                      height: "50%",
                      resizeMode: "contain",
                    }}
                    source={icons.unfilled_heart}
                  />
                </TouchableOpacity>
              </View>
              {
                item?.negotiable&&(

                  <LinearGradient
                  colors={["#48A0D7", "#6EC8D3", "#984A8B"]} // Adjust colors to your needs
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    ...appStyles.row,
                    width: "80%",
                    borderRadius: sizeHelper.calWp(10),
                    height: sizeHelper.calHp(35),
                    justifyContent: "center",
                    // padding: sizeHelper.calWp(10),
                    alignSelf: "flex-end",
                    gap: sizeHelper.calWp(15),
                  }}
                >
                  <Image
                    style={{
                      width: sizeHelper.calWp(30),
                      height: sizeHelper.calWp(30),
                      resizeMode: "contain",
                    }}
                    source={icons.negotiable}
                  />
                  <CustomText
                    text={"Negotiable"}
                    fontWeight="600"
                    fontFam={fonts.DMSans_Medium}
                    color={theme.colors.white}
                    size={21}
                  />
                </LinearGradient>

                )
              }
            
            </View>
          </ImageBackground>
        </View>

        <View
          style={{ padding: sizeHelper.calWp(15), gap: sizeHelper.calHp(15) }}
        >
          <CustomText
            text={item?.name}
            fontWeight="600"
            fontFam={fonts.DMSans_SemiBold}
            size={22}
          />
          <View style={styles.divider} />

          <GradientText>
            <CustomText
              text={item?.price}
              fontWeight="700"
              fontFam={fonts.DMSans_Bold}
              color={theme.colors.text_black}
              size={25}
            />
          </GradientText>
          <CustomText
            text={item?.date}
            color={theme.colors.text_black + "60"}
            size={18}
          />
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <Image
              style={{
                width: sizeHelper.calWp(25),
                height: sizeHelper.calWp(25),
                resizeMode: "contain",
                tintColor: "#ADADAD",
              }}
              source={icons.negotiable}
            />
            <CustomText
              text={"OneStop Hub"}
              color={theme.colors.text_black + "60"}
              size={18}
            />
          </View>

          <View style={{ flexDirection:"row", gap: sizeHelper.calWp(10),width:"80%" }}>
            <Image
              style={{
                width: sizeHelper.calWp(25),
                height: sizeHelper.calWp(25),
                resizeMode: "contain",
                tintColor: "#ADADAD",
              }}
              source={icons.pin}
            />
            <CustomText
              text={item?.location}
              color={theme.colors.text_black + "70"}
              size={18}
            />
          </View>
        </View>
      </View>
    </>
  );
};
export default CarouselProductCard;

const styles = StyleSheet.create({
  img: { width: 23, height: 23 },

  Container: {
    width: screenWidth / 2.3,
    backgroundColor:theme.colors.white,
    borderRadius: sizeHelper.calWp(30),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowColor: theme.colors.black + "30",
    shadowRadius: 2,
    elevation: 5,
  },
  inputContainer: {
    flex: 1,
    fontSize: sizeHelper.calHp(22),
    fontFamily: fonts.Poppins_Regular,
    padding: 0,
  },
  quantityMain: {
    alignItems: "center",
    justifyContent: "center",
    height: sizeHelper.calWp(55),
    width: sizeHelper.calWp(55),
  },
  quantityInner: {
    height: sizeHelper.calWp(50),
    width: sizeHelper.calWp(50),
    backgroundColor: theme.colors.primary,
    borderRadius: sizeHelper.calWp(13),
    justifyContent: "center",
    alignItems: "center",
  },
  quantity_icon: {
    width: sizeHelper.calWp(23),
    height: sizeHelper.calWp(23),
  },

  box: {
    height: sizeHelper.calHp(45),
    width: sizeHelper.calHp(45),
    borderRadius: sizeHelper.calWp(45),
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  divider: {
    width: "80%",
    height: sizeHelper.calHp(1),
    backgroundColor: theme.colors.black + "20",
  },
});

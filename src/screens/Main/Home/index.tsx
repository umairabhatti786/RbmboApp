import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import { theme } from "../../../utils/Themes";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import ProductCard from "../../../components/ProductCard";
import { images } from "../../../assets/images";
import { icons } from "../../../assets/icons";
import LinearGradient from "react-native-linear-gradient";
import GradientText from "../../../components/GradientText";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useTranslation } from "react-i18next";
import "../../../i18n/i18n"; // make sure i18n is loaded
import { productData } from "../../../utils/Data";
import HomeHeader from "../../../components/Home/HomeHeader";
import ProductDetailCard from "../../../components/Home/ProductDetailCard";
import ReviewCard from "../../../components/Home/ReviewCard";

const HomeScreen = ({ navigation }: any) => {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavourite, setisFavourite] = useState(true);


  const ProductDetail = () => {
    return (
      <LinearGradient
        colors={["#984A8B20", "#48A0D754", "#6EC8D370"]} // Adjust colors to your needs
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(20),
          overflow: "hidden",
        }}
      >
        <View style={styles.productDetailBox}>
          <ProductDetailCard
            title={t("product_type_title")}
            des={t("product_type_title")}
          />
          <ProductDetailCard
            title={t("product_category_title")}
            des={t("product_category")}
          />
          <ProductDetailCard
            title={t("product_condition_title")}
            des={t("product_condition")}
          />
          <ProductDetailCard
            title={t("product_brand_title")}
            des={t("product_brand")}
            disableDivider={true}
          />
        </View>
        <View
          style={{
            ...appStyles.rowjustify,
            padding: sizeHelper.calWp(10),
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            paddingVertical: sizeHelper.calHp(30),
            gap: sizeHelper.calWp(15),
          }}
        >
          <CustomText
            text={t("Read_More")}
            fontWeight="600"
            textDecorationLine="underline"
            fontFam={fonts.DMSans_Medium}
            color={"#984A8B"}
            size={25}
          />
          <Image
            source={icons.drop_down}
            style={{
              width: sizeHelper.calWp(30),
              height: sizeHelper.calWp(30),
            }}
          />
        </View>
      </LinearGradient>
    );
  };

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          gap: sizeHelper.calWp(25),
        }}
      >
        <HomeHeader />

        <ScrollView
          contentContainerStyle={{
            backgroundColor: theme.colors.background,
            paddingBottom: sizeHelper.calHp(170),
          }}
        >
          <ImageBackground
            style={{ width: "100%", height: sizeHelper.calHp(470) }}
            resizeMode="cover"
            source={images.product}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                padding: sizeHelper.calWp(30),
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
                  onPress={() => setisFavourite(!isFavourite)}
                  style={styles.box}
                >
                  <Image
                    style={{
                      width: "50%",
                      height: "50%",
                      resizeMode: "contain",
                      tintColor: isFavourite
                        ? theme.colors.alert
                        : theme.colors.gray,
                    }}
                    source={icons.heart}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                  <Image
                    style={{
                      width: "50%",
                      height: "50%",
                      resizeMode: "contain",
                    }}
                    source={icons.share}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    ...appStyles.row,
                    padding: sizeHelper.calWp(13),
                    borderRadius: 999,
                    backgroundColor: "#FFFFFF70",
                    alignSelf: "flex-start",
                    gap: sizeHelper.calWp(15),
                  }}
                >
                  <Image
                    style={{
                      width: sizeHelper.calWp(80),
                      height: sizeHelper.calWp(80),
                      resizeMode: "contain",
                    }}
                    source={images.profile_img}
                  />
                  <View>
                    <CustomText
                      text={t("user_name")}
                      fontWeight="600"
                      fontFam={fonts.DMSans_Medium}
                      color={theme.colors.text_black}
                      size={22}
                    />
                    <View
                      style={{
                        ...appStyles.row,
                        gap: sizeHelper.calWp(4),
                        marginRight: sizeHelper.calWp(10),
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((item, index) => {
                        return (
                          <Image
                            key={index.toString()}
                            source={icons.star}
                            style={{
                              width: sizeHelper.calWp(20),
                              height: sizeHelper.calWp(20),
                            }}
                          />
                        );
                      })}
                      <CustomText
                        text={t("reviews")}
                        color={theme.colors.black + "80"}
                        size={18}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    ...appStyles.row,
                    gap: sizeHelper.calWp(15),
                    alignSelf: "flex-end",
                  }}
                >
                  {[1, 2, 3].map((it, ind) => {
                    return (
                      <View
                        key={ind.toString()}
                        style={{
                          ...styles.dots,
                          backgroundColor:
                            currentIndex == ind
                              ? theme.colors.white
                              : "#FFFFFF70",
                          width:
                            currentIndex == ind
                              ? sizeHelper.calWp(70)
                              : sizeHelper.calWp(20),
                        }}
                      />
                    );
                  })}
                </View>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{ padding: sizeHelper.calWp(40), gap: sizeHelper.calHp(30) }}
          >
            <View style={appStyles.rowjustify}>
              <View style={{ width: "70%" }}>
                <CustomText
                  text={t("product_name")}
                  fontWeight="700"
                  fontFam={fonts.DMSans_Bold}
                  color={theme.colors.text_black}
                  size={30}
                />
                <CustomText
                  text={t("product_condition")}
                  fontWeight="700"
                  fontFam={fonts.DMSans_Bold}
                  color={theme.colors.text_black}
                  size={30}
                />
              </View>

              <GradientText>
                <CustomText
                  text={t("product_price")}
                  fontWeight="700"
                  fontFam={fonts.DMSans_Bold}
                  color={theme.colors.text_black}
                  size={25}
                />
              </GradientText>
            </View>

            <CustomText
              text={t("product_time")}
              color={theme.colors.text_black + "70"}
              size={22}
            />

            <GradientText>
              <CustomText
                text={t("show_original_text")}
                textDecorationLine="underline"
                size={23}
              />
            </GradientText>

            <CustomText
              text={t("product_des")}
              color={theme.colors.text_black + "90"}
              fontWeight="400"
              lineHeight={sizeHelper.calHp(40)}
              fontFam={fonts.DMSans_Light}
              size={23}
            />
            <ProductDetail />

            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(7),
              }}
            >
              <CustomText
                text={t("customer_review")}
                fontFam={fonts.DMSans_SemiBold}
                fontWeight="600"
                color={theme.colors.black}
                size={27}
              />

              <CustomText
                text={t("reviews")}
                color={theme.colors.gray}
                size={22}
              />
            </View>

            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(7),
                marginRight: sizeHelper.calWp(7),
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
              <CustomText
                text={"4.5 out of 5"}
                style={{ marginLeft: sizeHelper.calWp(5) }}
                color={theme.colors.black + "80"}
                size={22}
              />
            </View>
            <ReviewCard />

            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(15),
                alignSelf: "center",
              }}
            >
              {[1, 2, 3].map((it, ind) => {
                return (
                  <LinearGradient
                    colors={["#984A8B", "#48A0D7", "#6EC8D3"]} // Adjust colors to your needs
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    key={ind.toString()}
                    style={{
                      ...styles.dots,
                      width:
                        currentIndex == ind
                          ? sizeHelper.calWp(70)
                          : sizeHelper.calWp(20),
                    }}
                  />
                );
              })}
            </View>

            <View style={{ gap: sizeHelper.calHp(15) }}>
              <CustomText
                text={t("location")}
                fontWeight="600"
                fontFam={fonts.Poppins_SemiBold}
                size={24}
              />
              <View
                style={{
                  width: "100%",
                  height: sizeHelper.calHp(240),
                  borderRadius: sizeHelper.calWp(20),
                  overflow: "hidden",
                }}
              >
                <MapView
                  zoomControlEnabled={false}
                  showsBuildings={true}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                ></MapView>
              </View>
            </View>
          </View>

          <View style={{ gap: sizeHelper.calHp(15) }}>
            <CustomText
              fontWeight="600"
              text={t("explore_more")}
              style={{ marginLeft: sizeHelper.calWp(50) }}
              fontFam={fonts.DMSans_SemiBold}
              size={24}
            />

            <FlatList
              data={productData}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{
                paddingLeft: sizeHelper.calWp(50),
              }}
              contentContainerStyle={{
                gap: sizeHelper.calWp(20),
                paddingRight: sizeHelper.calWp(40),
                paddingBottom: sizeHelper.calHp(20),
              }}
              renderItem={({ item, index }: any) => {
                return (
                  <>
                    <ProductCard item={item} />
                  </>
                );
              }}
            />

            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(15),
                alignSelf: "center",
              }}
            >
              {[1, 2, 3].map((it, ind) => {
                return (
                  <LinearGradient
                    colors={["#984A8B", "#48A0D7", "#6EC8D3"]} // Adjust colors to your needs
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    key={ind.toString()}
                    style={{
                      ...styles.dots,
                      width:
                        currentIndex == ind
                          ? sizeHelper.calWp(70)
                          : sizeHelper.calWp(20),
                    }}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => {
            i18n.changeLanguage("arb");
          }}
          style={styles.absoluteBtn}
        >
          <LinearGradient
            colors={["#48A0D7", "#6EC8D3", "#984A8B"]} // Adjust colors to your needs
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <CustomText
              text={t("contact_seller_btn")}
              fontWeight="600"
              fontFam={fonts.DMSans_SemiBold}
              color={theme.colors.white}
              size={26}
            />
          </LinearGradient>
        </TouchableOpacity>
      </ScreenLayout>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingBottom: "10%",
  },

  box: {
    height: sizeHelper.calHp(65),
    width: sizeHelper.calHp(65),
    borderRadius: sizeHelper.calWp(65),
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  dots: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    borderRadius: sizeHelper.calWp(20),
  },
  productDetailBox: {
    width: "100%",
    backgroundColor: theme.colors.white,
    gap: sizeHelper.calHp(10),
    borderBottomRightRadius: sizeHelper.calWp(20),
    borderBottomLeftRadius: sizeHelper.calWp(20),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 4,
    shadowColor: theme.colors.black + "50",
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: sizeHelper.calHp(10),
  },
  absoluteBtn: {
    position: "absolute",
    bottom: sizeHelper.calHp(100),
    right: sizeHelper.calWp(50),
    width: "36%",
    borderRadius: 999,
    overflow: "hidden",
    height: sizeHelper.calHp(75),
  },
});

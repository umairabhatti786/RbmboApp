import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import ScreenLayout from '../../../components/ScreenLayout';
import {appStyles} from '../../../utils/GlobalStyles';
import {theme} from '../../../utils/Themes';
import CustomText from '../../../components/Text';
import images from '../../../utils/Constants/images';
import {fonts} from '../../../utils/Themes/fonts';
import icons from '../../../utils/Constants/icons';
import CustomSearch from '../../../components/Search';
import CarouselProductCard from '../../../components/CarouselProductCard';
import ProductCard from '../../../components/ProductCard';

const HomeScreen = ({navigation}: any) => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const categoriesData = [
    {title: 'All', icon: images.all_category, id: 1},
    {title: 'Frutes', icon: images.fruite, id: 2},
    {title: 'Vegetables', icon: images.vegatable, id: 3},
    {title: 'Dairy', icon: images.dairy, id: 4},
  ];
  const carouselData = [
    {
      img: images.cherries,
      name: 'Fresh Cherries',
      discount: '€34',
      price: '€20',
      unit: 'kg',
      quantity: '1',
    },
    {
      img: images.cabbage,
      name: 'Chinese cabbage',
      discount: '€34',
      price: '€10',
      unit: 'kg',
      quantity: '1',
    },
    {
      img: images.egg,
      name: 'Eggs ',
      discount: '€30',
      price: '€8',
      unit: 'dz',
      quantity: '1',
    },
  ];

  const productData = [
    {
      img: images.cherries,
      name: 'Fresh Cherries',
      discount: '€34',
      price: '€20',
      unit: 'kg',
      quantity: '1',
    },
    {
      img: images.cabbage,
      name: 'Chinese cabbage',
      discount: '€34',
      price: '€10',
      unit: 'kg',
      quantity: '1',
    },
    {
      img: images.egg,
      name: 'Eggs ',
      discount: '€30',
      price: '€8',
      unit: 'dz',
      quantity: '1',
    },
  ];
  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.rowjustify,
          paddingHorizontal: sizeHelper.calWp(50),
        }}>
        <View style={{...appStyles.row, gap: sizeHelper.calWp(20)}}>
          <View style={styles.profileContainer}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={images.profile_img}
            />
          </View>
          <View>
            <CustomText
              text={'Hello Alex'}
              fontWeight="600"
              fontFam={fonts.Poppins_SemiBold}
              color={theme.colors.secondry}
              size={25}
            />
            <CustomText
              text={'Rossland, Jamey Junctions'}
              color={theme.colors.gray}
              size={17}
            />
          </View>
        </View>

        <View style={{...appStyles.row, gap: sizeHelper.calWp(15)}}>
          <TouchableOpacity style={styles.box}>
            <Image
              style={{width: '50%', height: '50%', resizeMode: 'contain'}}
              source={icons.bell_notification}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image
              style={{width: '50%', height: '50%', resizeMode: 'contain'}}
              source={icons.order}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const SearchBar = () => {
    return (
      <View
        style={{
          paddingHorizontal: sizeHelper.calWp(50),
          width: '100%',
        }}>
        <CustomSearch placeholder="Search" />
      </View>
    );
  };

  const ViewAllContainer = () => {
    return (
      <View
        style={{
          ...appStyles.rowjustify,
          paddingHorizontal: sizeHelper.calWp(50),
        }}>
        <CustomText
          text={'Products'}
          fontWeight="600"
          fontFam={fonts.Poppins_SemiBold}
          color={theme.colors.secondry}
          size={25}
        />

        <TouchableOpacity style={{...appStyles.row, gap: sizeHelper.calWp(15)}}>
          <CustomText
            text={'View all'}
            fontWeight="600"
            fontFam={fonts.Poppins_SemiBold}
            color={theme.colors.secondry}
            size={22}
          />

          <Image
            style={{
              width: sizeHelper.calWp(20),
              height: sizeHelper.calWp(20),
              resizeMode: 'contain',
              tintColor: theme.colors.secondry,
            }}
            source={icons.next_arrow}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScreenLayout
      style={{
        flex: 1,
        gap: sizeHelper.calWp(25),
        paddingTop: sizeHelper.calHp(20),
      }}>
      <Header />
      <ScrollView
      contentContainerStyle={{
        gap: sizeHelper.calWp(25),
        backgroundColor:theme.colors.background

      }}
      >

      <SearchBar />
      <View style={{gap: sizeHelper.calHp(15)}}>
        <CustomText
          text={'Best Selling'}
          fontWeight="600"
          style={{marginLeft: sizeHelper.calWp(50)}}
          fontFam={fonts.Poppins_SemiBold}
          color={theme.colors.secondry}
          size={25}
        />

        <FlatList
          data={carouselData}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{
            paddingLeft: sizeHelper.calWp(50),
          }}
          contentContainerStyle={{
            gap: sizeHelper.calWp(20),
            paddingRight: sizeHelper.calWp(40),
          }}
          renderItem={({item, index}: any) => {
            return (
              <>
                <CarouselProductCard item={item} />
              </>
            );
          }}
        />
      </View>

      <ViewAllContainer />
      <View>
        <FlatList
          data={categoriesData}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingLeft: sizeHelper.calWp(50),
          }}
          contentContainerStyle={{
            gap: sizeHelper.calWp(10),
            paddingRight: sizeHelper.calWp(40),
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}: any) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item?.id)}
                style={{
                  ...styles.categoryContainer,
                  backgroundColor:
                    selectedCategory == item?.id
                      ? '#B7EFC543'
                      : theme.colors.background,
                }}>
                <Image
                  style={{
                    width: sizeHelper.calWp(35),
                    height: sizeHelper.calWp(35),
                    resizeMode: 'contain',
                    tintColor:
                      selectedCategory == item?.id
                        ? theme.colors.primary
                        : theme.colors.secondry,
                  }}
                  source={item?.icon}
                />
                <CustomText
                  color={
                    selectedCategory == item?.id
                      ? theme.colors.primary
                      : theme.colors.secondry
                  }
                  text={item?.title}
                  fontWeight="600"
                  fontFam={fonts.Poppins_SemiBold}
                  size={22}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <FlatList
          data={productData}
          showsVerticalScrollIndicator={false}
        
          style={{
            paddingLeft: sizeHelper.calWp(50),
          }}
          contentContainerStyle={{
            gap: sizeHelper.calWp(20),
            paddingRight: sizeHelper.calWp(40),
          }}
          renderItem={({item, index}: any) => {
            return (
              <>
                <ProductCard item={item} />
              </>
            );
          }}
        />
              </ScrollView>

    </ScreenLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingBottom: '10%',
  },
  profileContainer: {
    height: sizeHelper.calHp(80),
    width: sizeHelper.calHp(80),
    borderRadius: sizeHelper.calWp(80),
    backgroundColor: '#B7EFC5',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  box: {
    height: sizeHelper.calHp(75),
    width: sizeHelper.calHp(75),
    borderRadius: sizeHelper.calWp(75),
    backgroundColor: '#B7EFC543',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  categoryContainer: {
    borderRadius: sizeHelper.calHp(10),
    paddingHorizontal: sizeHelper.calWp(30),
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizeHelper.calWp(15),
    flexDirection: 'row',
    gap: sizeHelper.calWp(13),
  },
});

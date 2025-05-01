import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import sizeHelper, {screenWidth, screentHeight} from '../../utils/Helpers';
import {fonts} from '../../utils/Themes/fonts';
import {theme} from '../../utils/Themes';
import icons from '../../utils/Constants/icons';
import CustomText from '../Text';
import {appStyles} from '../../utils/GlobalStyles';


const CarouselProductCard = ({item}: any) => {
  return (
    <>
      <View
        style={[
          {
            ...styles.Container,
          },
        ]}>
        <Image
          source={item?.img}
          resizeMode="contain"
          style={{
            width: '100%',
            height: sizeHelper.calHp(200),
          }}
        />
        <View style={{padding: sizeHelper.calWp(10)}}>
          <View style={{...appStyles.row, gap: sizeHelper.calWp(5)}}>
            <CustomText
              text={item?.name}
              fontWeight="600"
              fontFam={fonts.Poppins_SemiBold}
              color={theme.colors.secondry}
              size={18}
            />
            <CustomText
              text={`(${item?.quantity} ${item?.unit})`}
              fontWeight="700"
              fontFam={fonts.Poppins_Bold}
              color={theme.colors.gray}
              size={19}
            />
          </View>
          <CustomText
            text={item?.discount}
            textDecorationLine="line-through"
            fontWeight="600"
            fontFam={fonts.Poppins_SemiBold}
            color={theme.colors.gray}
            size={18}
          />

          <View
            style={{
              ...appStyles.rowjustify,
              gap: sizeHelper.calWp(10),
              marginTop: sizeHelper.calHp(6),
            }}>
            <CustomText
              text={item?.price}
              fontWeight="700"
              fontFam={fonts.Poppins_Bold}
              color={theme.colors.secondry}
              size={20}
            />

            <View style={{...appStyles.row, gap: sizeHelper.calWp(10)}}>
              <TouchableOpacity style={styles.quantityMain}>
                <TouchableOpacity style={styles.quantityInner}>
                  <Image
                    source={icons.minus}
                    resizeMode="contain"
                    style={styles.quantity_icon}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  paddingHorizontal: sizeHelper.calWp(6),
                }}>
                <CustomText
                  text={'0'}
                  fontWeight="600"
                  fontFam={fonts.Poppins_SemiBold}
                  color={theme.colors.secondry}
                  size={20}
                />
              </View>

              <TouchableOpacity style={styles.quantityMain}>
                <TouchableOpacity
                  style={styles.quantityInner}
                  // onPress={onDecrementCart}
                >
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={styles.quantity_icon}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default CarouselProductCard;

const styles = StyleSheet.create({
  img: {width: 23, height: 23},

  Container: {
    height: screentHeight / 4,
    width: screenWidth / 2.4,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    overflow: 'hidden',

    borderRadius: sizeHelper.calWp(15),
  },
  inputContainer: {
    flex: 1,
    fontSize: sizeHelper.calHp(22),
    fontFamily: fonts.Poppins_Regular,
    padding: 0,
  },
  quantityMain: {
    alignItems: 'center',
    justifyContent: 'center',
    height: sizeHelper.calWp(55),
    width: sizeHelper.calWp(55),
  },
  quantityInner: {
    height: sizeHelper.calWp(50),
    width: sizeHelper.calWp(50),
    backgroundColor: theme.colors.primary,
    borderRadius: sizeHelper.calWp(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity_icon: {
    width: sizeHelper.calWp(23),
    height: sizeHelper.calWp(23),
  },
});

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import {theme} from '../../../utils/Themes';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomButton from '../../../components/Button';
import CustomText from '../../../components/Text';
import {fonts} from '../../../utils/Themes/fonts';
import CustomInput from '../../../components/Input';
import {appStyles} from '../../../utils/GlobalStyles';
import icons from '../../../utils/Constants/icons';

const LoginScreen = ({navigation}: any) => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <ScreenLayout
      style={{
        flex: 1,
        paddingHorizontal: sizeHelper.calWp(50),
        paddingTop: sizeHelper.calHp(60),
        gap: sizeHelper.calWp(30),
      }}>
      <TouchableWithoutFeedback
        style={{flex: 1, gap: sizeHelper.calWp(30)}}
        onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 15 : 10} // Adjust if header present
        >
          <View>
            <CustomText
              text={'Welcome'}
              fontWeight="700"
              fontFam={fonts.Poppins_Bold}
              color={theme.colors.primary}
              style={{lineHeight: 40}} // ✅ Add lineHeight close to font size
              size={50}
            />
            <CustomText
              text={'Please Login'}
              fontWeight="700"
              fontFam={fonts.Poppins_Bold}
              style={{lineHeight: 40}} // ✅ Add lineHeight close to font size
              color={theme.colors.primary}
              size={50}
            />
          </View>

          <CustomText
            text={'Pleae login to your account and enjoy your experience'}
            color={theme.colors.secondry}
            size={25}
          />
          <View style={{flex: 1}}>
            <View style={{gap: sizeHelper.calWp(15)}}>
              <CustomInput
                label={'Email'}
                focusedInput={focusedInput}
                leftSource={icons.email}
                setFocusedInput={setFocusedInput}
                placeholder="dummy@gmail.com"
                inputKey="email"
              />
              <CustomInput
                label={'Password'}
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                leftSource={icons.lock}
                placeholder="Password"
                inputKey="password"
              />
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  paddingVertical: sizeHelper.calHp(4),
                }}>
                <CustomText
                  text={'Forgot Password?'}
                  color={theme.colors.primary}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.botttom}>
            <CustomButton text="Login"
            onPress={()=>navigation.navigate("BottomTab")}
             width={'100%'} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(7),
                alignSelf: 'center',
              }}>
              <CustomText
                text={'Don’t have account?'}
                color={theme.colors.secondry}
                size={20}
              />
              <CustomText
                text={'Sign Up'}
                fontFam={fonts.Poppins_Medium}
                fontWeight="600"
                color={theme.colors.primary}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScreenLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingBottom: '10%',
  },
});

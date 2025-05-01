import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import {theme} from '../../../utils/Themes';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomButton from '../../../components/Button';
import CustomText from '../../../components/Text';
import {fonts} from '../../../utils/Themes/fonts';
import CustomInput from '../../../components/Input';
import {appStyles} from '../../../utils/GlobalStyles';
import icons from '../../../utils/Constants/icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignupScreen = ({navigation}: any) => {
    const [focusedInput, setFocusedInput] = useState(null);

  return (
    <ScreenLayout
      style={{
        flex: 1,
        paddingHorizontal: sizeHelper.calWp(50),
        paddingTop: sizeHelper.calHp(60),
        gap: sizeHelper.calWp(30),
      }}>
         <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        // style={{ flex:1,backgroundColor:"red" }}
        contentContainerStyle={{ justifyContent: "space-between",
        gap: sizeHelper.calWp(30),

     }}
      >

      <View>
        <CustomText
          text={'Please'}
          fontWeight="700"
          fontFam={fonts.Poppins_Bold}
          color={theme.colors.primary}
          style={{lineHeight: 40}} // ✅ Add lineHeight close to font size
          size={50}
        />
        <CustomText
          text={'Sign Up Account'}
          fontWeight="700"
          fontFam={fonts.Poppins_Bold}
          style={{lineHeight: 40}} // ✅ Add lineHeight close to font size
          color={theme.colors.primary}
          size={50}
        />
      </View>

      <CustomText
        text={'Pleae Sign up to your account and enjoy your experience'}
        color={theme.colors.secondry}
        size={25}
      />
      <View style={{flex: 1}}>
        <View style={{gap: sizeHelper.calWp(15)}}>
          <CustomInput label={'Username'} 
           focusedInput={focusedInput}
           leftSource={icons.user}
           placeholder='Username'
           inputKey="username"  
           setFocusedInput={setFocusedInput}


          />
          <CustomInput label={'Shop Name'}
           focusedInput={focusedInput}
           leftSource={icons.shop}
           placeholder='Shop Name'
           inputKey="shop"
           setFocusedInput={setFocusedInput}


           />
          <CustomInput label={'Email'} 
           focusedInput={focusedInput}
           leftSource={icons.email}
           placeholder='dummy@gmail.com'
           inputKey="email"
           setFocusedInput={setFocusedInput}


          />
          <CustomInput label={'Password'}
           focusedInput={focusedInput}
           leftSource={icons.lock}
           placeholder='Password'
           inputKey="password"
           setFocusedInput={setFocusedInput}


           />
        </View>
      </View>

      <View style={styles.botttom}>
        <CustomButton text="Signup" width={'100%'} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            ...appStyles.row,
            gap: sizeHelper.calWp(7),
            alignSelf: 'center',
          }}>
          <CustomText
            text={'Have account?'}
            color={theme.colors.secondry}
            size={20}
          />
          <CustomText
            text={'Login'}
            fontFam={fonts.Poppins_Medium}
            fontWeight="600"
            color={theme.colors.primary}
            size={20}
          />
        </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>

    </ScreenLayout>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingTop: '40%',
  },
});

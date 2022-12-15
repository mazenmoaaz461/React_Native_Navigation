import React, {useState} from 'react';
import {SafeAreaView,StyleSheet,Text,View,Image,useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height}= useWindowDimensions();

    const navigation = useNavigation();

    const onSignInPressed = () =>
    {
        //console.warn("Successfuly, Signed In");
        //alert("Signed In");
        //validate user

        navigation.navigate('Home');
        
    }

    const onForgotPasswordPressed = () =>
    {
        //alert("ForgotPass");
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () =>
    {
        //alert("Sign Up");
        navigation.navigate('SignUp');
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
          <Image
          source={Logo}
          style={[styles.logo, {height:height*0.3}]}
          resizeMode="contain"
          />
          <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
          <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
          <CustomButton text="Sign In" onPress={onSignInPressed}/>


          <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY"/>


          <SocialSignInButtons/>


          <CustomButton text="Don't have an Account? Create one" onPress={onSignUpPressed} type="TERTIARY"/>

      </View>
      </ScrollView>
    );
  };


const styles = StyleSheet.create({

    root:
    {
        alignItems: 'center',
        padding: 20,
    },
    logo:
    {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;
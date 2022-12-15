import React from 'react';
import CustomButton from '../CustomButton';
import {SafeAreaView,StyleSheet,Text,View, ScrollView} from 'react-native';

const SocialSignInButtons = () =>
{

    const onSignInFacebook = () =>
    {
       alert("SignInFacebook");
    }

    const onSignInGoogle = () =>
    {
       alert("SignInGoogle");
    }

    const onSignInApple = () =>
    {
       alert("SignInApple");
    }

   return (
    <>

                  <CustomButton
                  text="Sign In with Facebook"
                  onPress={onSignInFacebook}
                  bgcolor="#E7EAF4"
                  fgcolor="#4765A9"
                  />

                  <CustomButton
                  text="Sign In with Google"
                  onPress={onSignInGoogle}
                  bgcolor="#FAE9EA"
                  fgcolor="#DD4D44"
                  />

                  <CustomButton
                  text="Sign In with Apple"
                  onPress={onSignInApple}
                  bgcolor="#e3e3e3"
                  fgcolor="#363636"
                  />

    </>
   )
}

const styles = StyleSheet.create({

    root:
    {
        alignItems: 'center',
        padding: 20,
    },
    text:
    {
        color:'gray',
        marginVertical: 10,
    },
    link:
    {
        color: "#FDB075"
    },
    title:
    {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#185B02',
        margin: 10,
    }
});

export default SocialSignInButtons;
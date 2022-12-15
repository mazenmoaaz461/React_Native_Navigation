import React, {useState} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () =>
    {
        //alert("Confirmation");
        navigation.navigate('Home');
    }

    const onResendPressed = () => {
        alert("Resent");
    }

    const onSignInPress = () =>   {
        //alert("Back");
        navigation.navigate('SignIn');
    }


    return (

      <View style={styles.root}>

          <Text style={styles.title}>
          Confirm your Email
          </Text>


          <CustomInput
          placeholder="Enter your Confirmation Code"
          value={code}
          setValue={setCode}
          />

          <CustomButton
          text="Confirm"
          onPress={onConfirmPressed}
          />

          <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="Secondary"
          />

          <CustomButton
          text="Back to Sign In"
          onPress={onSignInPress}
          type="TERTIARY"
          />


      </View>

    );
  };


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

export default ConfirmEmailScreen;
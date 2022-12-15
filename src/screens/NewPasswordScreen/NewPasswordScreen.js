import React, {useState} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {

    const [code, setCode] = useState('');
    const [NewPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () =>
    {
        //alert("sent");
        navigation.navigate('Home');
    }

    const onSignInPress = () =>   {
        //alert("Back");
        navigation.navigate('SignIn');
    }


    return (

      <View style={styles.root}>

          <Text style={styles.title}>
          Create New Password
          </Text>


          <CustomInput
          placeholder="Code"
          value={code}
          setValue={setCode}
          />

          <CustomInput
          placeholder="Enter your New Password"
          value={NewPassword}
          setValue={setNewPassword}
          />

          <CustomButton
          text="Send"
          onPress={onSendPressed}
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

export default NewPasswordScreen;
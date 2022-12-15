import React, {useState} from 'react';
import {SafeAreaView,StyleSheet,Text,View, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfpassword, setcfpassword] = useState('');

    const navigation = useNavigation();


    //const {height}= useWindowDimensions(); //only used for logo

    const onTermsOUsePressed = () =>
    {
       alert("onTermsOUsePressed");
    }

    const onPrivacyPressed = () =>
    {
       alert("onPrivacyPressed");
    }


    const onRegisterPressed = () =>
    {
        navigation.navigate('ConfirmEmail');
    }

    const onSignInPressed = () =>
    {
        navigation.navigate('SignIn');
    }


    return (

      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>

          <Text style={styles.title}>
          Create an account
          </Text>

          <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          />

          <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          />

          <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          />

          <CustomInput
          placeholder="Confirm Password"
          value={cfpassword}
          setValue={setcfpassword}
          secureTextEntry
          />

          <CustomButton
          text="Register"
          onPress={onRegisterPressed}
          />


          <Text style={styles.text}>By Registering , you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOUsePressed}>Terms of Use </Text> and{' '}<Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
          </Text>

        <SocialSignInButtons/>



          <CustomButton
          text="Have an Account? Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
          />

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

export default SignUpScreen;
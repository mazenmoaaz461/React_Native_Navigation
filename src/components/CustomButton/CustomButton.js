import React from 'react';

import {Text,StyleSheet, Pressable} from 'react-native';


const CustomButton = ({onPress, text, type = "PRIMARY", bgcolor, fgcolor, myalign}) =>
{
    return(
        
        <Pressable onPress={onPress}
         style={[
         styles.container,
         styles[`container_${type}`],
         bgcolor ? {backgroundColor:bgcolor} : {},
         myalign ? {alignSelf:myalign} : {},
         ]}>

            <Text style={[
            styles.text,
             styles[`text_${type}`],
             fgcolor ? {color:fgcolor} : {},
            ]}
            >
            {text}
            </Text>
        </Pressable>
        
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding:15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius:5,
    },

    container_PRIMARY:
    {
        backgroundColor: '#168F1A',
    },

    container_Counter:
    {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    backgroundColor:'#fff',
    borderRadius:100,
    marginVertical: 15,
    padding:15,
    alignSelf: 'flex-end',
    },
    
    container_Secondary:
    {
        borderColor: '#168F1A',
        borderWidth: 2,
    },
    container_TERTIARY:
    {

    },
    text:
    {
        fontWeight: 'bold',
        color: 'white',
    },
    text_Secondary:
    {
        color: '#168F1A',
    },
    text_TERTIARY:
    {
        fontWeight: 'bold',
        color: 'gray',
    },
    
});
export default CustomButton;
import React, {useState} from 'react';
import {Text,View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
export default class index extends React.Component
{
   
    constructor()
    {
        super()
        this.state=
        {
            sumcount:0,
            doubledcount:1,
        }
    }
    

    
    summing = () =>
    {
        console.log("Count \n",this.state.sumcount)
        this.setState({'sumcount': this.state.sumcount + 1})
    }

    doubledcount = () =>
    {
        this.setState({'doubledcount': this.state.doubledcount + 1}, ()=>{
        this.setState({'doubledcount': this.state.doubledcount + 1})
        })
        //console.log("Count \n",this.state.sumcount)
    }
onPressFunction = ()=>{
    this.doubledcount();
    this.summing();
}

    
    render(){
    return (
        <View>
            <Text style={{fontSize: 24,alignSelf: 'center'}}>HomeScreen</Text>
            
            <CustomButton text="+1,2" onPress={this.onPressFunction} type="Counter" bgcolor="black"/>
            
            <Text style={{fontSize: 24,alignSelf: 'flex-start'}}>{this.state.sumcount}</Text>
            <Text style={{fontSize: 24,alignSelf: 'center'}}>{this.state.doubledcount}</Text>
            
        </View>
    );
    }
};



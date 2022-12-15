import React,{Component} from 'react';
import {SafeAreaView,StyleSheet,Text} from 'react-native';

//CREATE A COMPONENT USING A CLASS TO EXTEND (CLASS BASED COMPONENT)
class Header extends Component {
    constructor()
    {
        super();
        this.state = 
        {
            title: 'Title from state',

        };
    }
    render()
    {
        return(
            <SafeAreaView style={styles.header}>
                <Text style={styles.text}>{this.props.title}</Text>
                <Text style={styles.text}>{this.props.title2}</Text>
                <Text style={styles.text}>{this.state.title}</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    header:
     {
        backgroundColor: '#efefef',
        height: 80,
        alignItems: 'center', //Horizontal alignment
        justifyContent: 'center', //vertical alignment

     },
     text:
     {
        fontSize: 15,
        fontWeight: 'bold',
     },
    });

export default Header;
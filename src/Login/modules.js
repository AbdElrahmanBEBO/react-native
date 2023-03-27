import headImage from '../../assets/images/react.jpeg'

const login_style = StyleSheet.create({
    container: {
      flex: 1,
      width: 390,
      justifyContent: 'start',
      alignItems: 'center',
    },
    background_image: {
      width:391,
      height:230,
    },
    sign_in: {
      fontSize:50,
      fontWeight: "bold",
      fontStyle: 'italic',
    },
    input: {
      height: 40,
      width:300,
      margin: 15,
      borderWidth: 1,
      padding: 10,
    },    
    btn: {
      padding: 150,
      margin:10
    },
    couner: {
      flex:1,
      margin:20
    },
});

import React from 'react'

import { 
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    Alert,
} from 'react-native';

export {
  login_style,
  headImage,
  React,
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Alert,
}

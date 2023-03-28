import headImage from '../../assets/images/react.jpeg'

const st = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
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
      padding: 150
    }
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
} from 'react-native';

export {
  st,
  headImage,
  View,
  ImageBackground,
  Text,
  TextInput,
  SafeAreaView,
  Button,
}

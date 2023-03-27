import { login_style, headImage, React, View, ImageBackground, Text, TextInput, SafeAreaView, Button, Alert } from './modules';

import firebaseApp from '../firebase/init';

export default function Login(props) {
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [counter, setCounter] = React.useState(0)
  
  
  return (
    <View style={login_style.container}>
        <ImageBackground source={headImage} style={login_style.background_image}></ImageBackground>        
        <Text style={login_style.sign_in}>Sign In</Text>
        <SafeAreaView>
          <TextInput
            style={login_style.input}
            placeholder="name"
            onChange={(e) => {setName(e.target.value)}}
            value={name}
          />
          <TextInput
            style={login_style.input}
            placeholder="password"
            onChange={(e) => {setPassword(e.target.value)}}
            value={password}
            secureTextEntry={true}
          />
        </SafeAreaView> 

        <Button
          style={login_style.btn}
          title="Sing in"
          onPress={() => Alert.alert('Cannot press this one')}
        />      
        <View style={login_style.couner}>
          <Button style={login_style.btn} title="-" onPress={() => setCounter(state => state-1)}/>         
          <Text style={login_style.sign_in}>{counter}</Text>                  
          <Button style={login_style.btn} title="+" onPress={() => setCounter(state => state+1)}/>                           
        </View>                     
      </View>
    );
}


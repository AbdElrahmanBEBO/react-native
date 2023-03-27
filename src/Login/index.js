import { login_style, headImage, React, View, ImageBackground, Text, TextInput, SafeAreaView, Button, Alert } from './modules';

import auth from '../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'



export default function Login(props) {
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [counter, setCounter] = React.useState(0)
  
  const Login = () => {
    signInWithEmailAndPassword(auth, name, password)
    .then((userCredential) => {
      setName('it works')
    })
    .catch(error => {
      alert(error.message)
    })
  }

  const loginImage = (
    <ImageBackground source={headImage} style={login_style.background_image}></ImageBackground>
  )

  const loginForm = (
    <>
      <Text style={login_style.sign_in}>Sign In</Text>
      <SafeAreaView>
        <TextInput style={login_style.input} placeholder="name" onChange={(e) => {setName(e.target.value)}} value={name} />
        <TextInput style={login_style.input} placeholder="password" onChange={(e) => {setPassword(e.target.value)}} value={password} secureTextEntry={true} />
      </SafeAreaView> 
      <Button style={login_style.btn} title="Sing in" onPress={Login}/>      
    </>
   )
  
  const counterBox = (
  <View style={login_style.couner}>
    <Button style={login_style.btn} title="-" onPress={() => setCounter(state => state-1)}/>         
    <Text style={login_style.sign_in}>{counter}</Text>                  
    <Button style={login_style.btn} title="+" onPress={() => setCounter(state => state+1)}/>                           
  </View>                       
  )

  return (
    <View style={login_style.container}>
      {loginImage}
      {loginForm}
      {/* {counterBox} */}
    </View>
  );
}

